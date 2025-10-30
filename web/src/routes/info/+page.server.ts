import { type InfoQuery, infoQuery } from '$sanity';
import { getPrerender } from '$util/getPrerender';

export const load = async ({
	locals: {
		sanity: { client }
	}
}) => {
	const infoPage = await client.fetch<InfoQuery>(infoQuery);

	return {
		infoPage,
		metadata: infoPage.metadata,
		pageTitle: infoPage.title
	} satisfies App.PageReturn;
};

export const prerender = getPrerender();
