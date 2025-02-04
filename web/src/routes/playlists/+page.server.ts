import { PLAYLISTS_QUERY, type PLAYLISTS_QUERYResult } from '$sanity';

export const load = async ({ locals: { client } }) => {
	const data = await client.fetch<PLAYLISTS_QUERYResult>(PLAYLISTS_QUERY);
	return {
		playlists: data?.playlists || [],
		pageTitle: 'Playlists',
		metadata: { _type: 'metadata' }
	} satisfies App.PageReturn;
};
