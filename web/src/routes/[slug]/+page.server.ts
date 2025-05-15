import { ROOT_SLUG_QUERY } from '$lib/sanity';
import { error } from '@sveltejs/kit';

export const load = async ({
	parent,
	params,
	locals: {
		sanity: { client, previewEnabled }
	}
}) => {
	const { contextCaseStudies } = (await parent()) as App.LayoutData;

	const index = contextCaseStudies.findIndex(({ slug }) => slug == params.slug);

	const data = await client.fetch(ROOT_SLUG_QUERY, { slug: params.slug });

	if (!data) {
		return error(404);
	}

	if (data._type === 'caseStudy' && index === -1 && !previewEnabled) {
		return error(404);
	}

	return {
		caseStudy: {
			index,
			...data.caseStudy
		},
		pageTitle: data.title,
		modules: data.modules || [],
		metadata: data.metadata
	} satisfies App.PageReturn;
};
