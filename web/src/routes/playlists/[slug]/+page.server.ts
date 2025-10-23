import { PLAYLIST_QUERY } from '$lib/sanity/queries';

export const load = async ({ params: { slug }, locals: { client } }) => {
	const playlist = await client.fetch(PLAYLIST_QUERY, { slug });

	return { playlist };
};
