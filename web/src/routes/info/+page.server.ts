import { fetchNowPlaying } from '$lib/nowplaying';
import { type InfoQuery, infoQuery } from '$sanity';

export const load = async ({
	locals: {
		sanity: { client }
	}
}) => {
	const [infoPage, nowPlaying] = await Promise.all([
		client.fetch<InfoQuery>(infoQuery),
		fetchNowPlaying()
	]);

	return {
		nowPlaying,
		infoPage,
		metadata: infoPage.metadata,
		pageTitle: infoPage.title
	} satisfies App.PageReturn;
};
