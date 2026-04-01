import { fetchNowPlaying } from '$lib/nowplaying';
import { type InfoQuery, infoQuery } from '$sanity';

export const load = async ({
	locals: {
		sanity: { client }
	}
}) => {
	const infoPage = await client.fetch<InfoQuery>(infoQuery);
	const nowPlaying = await fetchNowPlaying();

	return {
		nowPlaying,
		infoPage,
		metadata: infoPage.metadata,
		pageTitle: infoPage.title
	} satisfies App.PageReturn;
};
