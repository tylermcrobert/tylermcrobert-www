import { PAGE_QUERY, type Module, type PAGE_QUERYResult } from '$sanity';
import { error } from '@sveltejs/kit';

export const load = async ({ params, locals: { client } }) => {
	const data = await client.fetch<PAGE_QUERYResult>(PAGE_QUERY, {
		slug: params.slug
	});

	if (!data) {
		return error(404);
	}

	return {
		pageTitle: data.title,
		metadata: data.metadata,
		modules: (data.modules || []) as Module[]
	} satisfies App.PageReturn;
};
