import { getPlaylistById } from '$lib/spotify/+spotify.js';
import { json } from '@sveltejs/kit';

export async function GET({ params: { id } }) {
	try {
		if (!id) {
			return json({ error: 'Playlist ID is required' }, { status: 400 });
		}

		const res = await getPlaylistById(id);
		const data = await res.json();

		return json(data);
	} catch (error) {
		console.error('Error fetching playlist:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
}
