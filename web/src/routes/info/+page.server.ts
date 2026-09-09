import { redirect } from '@sveltejs/kit';

import { infoQuery, type InfoQueryResult } from '$sanity';

export const load = async ({
	locals: {
		sanity: { client }
	}
}) => {
	const infoPage = await client.fetch<InfoQueryResult>(infoQuery);

	if (!infoPage) {
		return redirect(302, '/');
	}

	return {
		infoPage,
		metadata: infoPage.metadata,
		pageTitle: infoPage.title
	} satisfies App.PageReturn;
};
