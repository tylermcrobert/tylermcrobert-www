import { PAGE_QUERY, type PageQuery } from '$sanity';
import { error } from '@sveltejs/kit';

export const load = async ({ params, locals: { client } }) => {
	const data = await client.fetch<PageQuery>(PAGE_QUERY, {
		slug: params.slug
	});

	if (!data) {
		return error(404);
	}

	return {
		pageTitle: data.title,
		metadata: data.metadata,
		modules: data.modules || []
	} satisfies App.PageReturn;
};
