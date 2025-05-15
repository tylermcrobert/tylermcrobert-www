import { json } from '@sveltejs/kit';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';

const CREDENTIALS_ENDPOINT =
	'https://accounts.spotify.com/api/token?grant_type=client_credentials';
const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/playlists';

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
	throw new Error('Spotify API keys not found in environment variables.');
}
const corsHeaders = {
	'Access-Control-Allow-Origin':
		process.env.NODE_ENV === 'development'
			? '*'
			: 'https://content.tylermcrobert.com',
	'Access-Control-Allow-Methods': 'GET, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type, Authorization',
	'Access-Control-Allow-Credentials': 'true'
};

export async function GET({ params: { id } }) {
	if (!id) {
		return json(
			{ error: 'Playlist ID is required' },
			{ status: 400, headers: corsHeaders }
		);
	}

	/**
	 * Fetch Auth code
	 */

	let accessToken: string;

	try {
		const authFormatted = `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`;
		const authEncoded = Buffer.from(authFormatted).toString('base64');

		const credentialsRes = await fetch(CREDENTIALS_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${authEncoded}`
			}
		});

		if (!credentialsRes.ok) {
			return json(
				{ error: 'Failed to fetch auth token' },
				{ status: credentialsRes.status, headers: corsHeaders }
			);
		}

		const credentialsData = await credentialsRes.json();
		accessToken = credentialsData.access_token;
	} catch (error) {
		console.error('Unknown error fetching auth token:', error);
		return json(
			{ error: 'Unknown error fetching auth token' },
			{ status: 500, headers: corsHeaders }
		);
	}

	/**
	 * Fetch Playlists
	 */

	try {
		const res = await fetch(`${PLAYLISTS_ENDPOINT}/${id}`, {
			headers: { Authorization: `Bearer ${accessToken}` }
		});

		if (!res.ok) {
			return json(
				{ error: 'Failed to fetch playlist' },
				{ status: res.status, headers: corsHeaders }
			);
		}

		const data = await res.json();

		return json(data, {
			headers: corsHeaders
		});
	} catch (error) {
		console.error('Error fetching playlist:', error);
		return json(
			{ error: 'Failed to fetch playlist' },
			{ status: 500, headers: corsHeaders }
		);
	}
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
	return new Response(null, {
		status: 204,
		headers: corsHeaders
	});
}
