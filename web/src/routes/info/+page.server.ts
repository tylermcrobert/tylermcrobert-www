import getNowPlaying from '$lib/last.fm/+lastfm.js';
import { infoQuery, type InfoQuery } from '$sanity';

export const load = async ({ locals: { client } }) => {
	const [nowPlaying, infoPage] = await Promise.all([
		await getNowPlaying(),
		await client.fetch<InfoQuery>(infoQuery)
	]);

	return {
		nowPlaying,
		infoPage,
		metadata: infoPage.metadata,
		pageTitle: infoPage.title
	} satisfies App.PageReturn;
};
