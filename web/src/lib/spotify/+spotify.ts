/* eslint-disable @typescript-eslint/no-explicit-any */

import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';
import { formatTime } from '../../util/msToTime';

const clientId = SPOTIFY_CLIENT_ID;
const clientSecret = SPOTIFY_CLIENT_SECRET;

if (!clientId || !clientSecret) {
	throw new Error('Spotify API keys not found in environment variables.');
}

const credentialsEndpoint =
	'https://accounts.spotify.com/api/token?grant_type=client_credentials';
const playlistEndpoint = 'https://api.spotify.com/v1/playlists';

/**
 * Fetch auth token.
 * @returns Auth token string
 */

export async function getAuthToken(): Promise<string> {
	const authFormatted = `${clientId}:${clientSecret}`;
	const base64Auth = Buffer.from(authFormatted).toString('base64');

	const data = await fetch(credentialsEndpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${base64Auth}`
		}
	}).then((res) => res.json());

	return data.access_token;
}

/**
 * Fetches data on a Playlist given its ID
 * @param link Link to Spotify Playlist
 */
export async function getPlaylistById(link: string) {
	const authToken = await getAuthToken();
	const id = link.replace('https://open.spotify.com/playlist/', '');

	const data = await fetch(`${playlistEndpoint}/${id}`, {
		headers: { Authorization: `Bearer ${authToken}` }
	}).then((res) => res.json());

	return _formatOutput(data);
}

/**
 * Takes response data and simplifies
 * @param data Spotify Output
 * @returns SpotifyPlaylist
 */
function _formatOutput(data: any): SpotifyPlaylist {
	const oldestDate = data.tracks.items
		.map((item: any) => new Date(item.added_at))
		.sort((a: number, b: number) => a - b)[0] as Date;

	const totalMilliseconds = data.tracks.items
		.map((item: any) => item.track.duration_ms)
		.reduce((total: number, current: number) => total + current, 0);

	return {
		name: data.name,
		href: data.external_urls.spotify,
		image: data.images[0].url,
		date: oldestDate.toISOString().split('.')[0],
		duration: formatTime(totalMilliseconds, 'hh:mm:ss'),
		tracks: data.tracks.items.map((item: any) => ({
			name: item.track.name,
			added: item.added_at,
			duration: formatTime(item.track.duration_ms, 'hh:mm'),
			artists: item.track.artists.map((item: any) => item.name)
		}))
	};
}

export type SpotifyPlaylist = {
	href: string;
	image: string;
	name: string;
	date: string;
	duration: string;
	tracks: SpotifyTrack[];
};

type SpotifyTrack = {
	name: string;
	added: string;
	duration: string;
	artists: string[];
};
