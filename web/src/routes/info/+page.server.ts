import getNowPlaying from '$lib/last.fm/+lastfm.js';
import { infoQuery, type InfoQuery } from '$sanity';

export const load = async ({ locals: { client } }) => {
	const infoPageFetch = client.fetch<InfoQuery>(infoQuery);
	const nowPlayingFetch = getNowPlaying();

	const [infoPage, nowPlaying] = await Promise.all([
		infoPageFetch,
		nowPlayingFetch
	]);

	return {
		nowPlaying,
		infoPage,
		pageTitle: 'info'
	} satisfies App.PageReturn;
};
