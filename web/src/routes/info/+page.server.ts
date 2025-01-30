import { infoQuery, type InfoQuery } from '$sanity';

export const load = async ({ locals: { client } }) => {
	const infoPage = await client.fetch<InfoQuery>(infoQuery);
	return {
		infoPage,
		pageTitle: 'info'
	} satisfies App.PageReturn;
};
