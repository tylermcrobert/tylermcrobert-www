import { infoQuery, type InfoQuery } from '$sanity';

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
