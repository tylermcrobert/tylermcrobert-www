import {
	HOMEPAGE_QUERY,
	type HOMEPAGE_QUERYResult,
	type Module
} from '$sanity';
import { error } from '@sveltejs/kit';

export const load = async ({
	locals: {
		sanity: { client }
	}
}) => {
	const data = await client.fetch<HOMEPAGE_QUERYResult>(HOMEPAGE_QUERY);

	if (!data) {
		return error(404);
	}

	return {
		pageTitle: null,
		metadata: null,
		modules: (data.modules || []) as Module[]
	} satisfies App.PageReturn;
};
