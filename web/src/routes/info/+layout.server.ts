import { getPlaylistById } from '$lib/spotify/+spotify';
import { infoQuery, type InfoQuery } from '$sanity';

export const load = async ({ locals: { client } }) => {
	const infoPage = await client.fetch<InfoQuery>(infoQuery);

	const playlistLinks = (infoPage.playlists || [])
		.map(({ link }) => link)
		.filter(Boolean) as string[];

	const playlists = await Promise.all(playlistLinks.map(getPlaylistById));

	return {
		infoPage,
		metadata: infoPage.metadata,
		playlists,
		pageTitle: 'Info'
	} satisfies App.PageReturn;
};

export const prerender = true;
