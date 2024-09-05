import { HOMEPAGE_QUERY, type HOMEPAGE_QUERYResult } from '$sanity';
import { error } from '@sveltejs/kit';

export const load = async ({ locals: { client } }) => {
	const data = await client.fetch<HOMEPAGE_QUERYResult>(HOMEPAGE_QUERY);

	if (!data) {
		return error(404);
	}

	return {
		pageTitle: null,
		metadata: null,
		modules: data.modules || []
	};
};
