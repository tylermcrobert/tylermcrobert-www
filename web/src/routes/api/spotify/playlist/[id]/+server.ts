import { json } from '@sveltejs/kit';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';

const CREDENTIALS_ENDPOINT =
	'https://accounts.spotify.com/api/token?grant_type=client_credentials';
const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/playlists';

if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
	throw new Error('Spotify API keys not found in environment variables.');
}

export async function GET({ params: { id } }) {
	try {
		if (!id) {
			return json({ error: 'Playlist ID is required' }, { status: 400 });
		}

		/**
		 * Fetch Auth code
		 */

		const authFormatted = `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`;
		const authEncoded = Buffer.from(authFormatted).toString('base64');

		const credentialsRes = await fetch(CREDENTIALS_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${authEncoded}`
			}
		});

		const credentialsData = await credentialsRes.json();
		const accessToken = credentialsData.access_token;

		if (!credentialsRes.ok || !accessToken) {
			return json({ error: 'Failed to fetch auth token' }, { status: 500 });
		}

		console.log(accessToken);

		/**
		 * Fetch Playlists
		 */

		const res = await fetch(`${PLAYLISTS_ENDPOINT}/${id}`, {
			headers: { Authorization: `Bearer ${accessToken}` }
		});

		const data = await res.json();

		return json(data);
	} catch (error) {
		console.error('Error fetching playlist:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
}
