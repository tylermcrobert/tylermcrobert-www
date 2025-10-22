import {
	ROOT_SLUG_QUERY,
	type Module,
	type ROOT_SLUG_QUERYResult
} from '$lib/sanity';
import { error } from '@sveltejs/kit';

export const load = async ({ parent, params, locals: { client, preview } }) => {
	const { contextCaseStudies } = (await parent()) as App.LayoutData;

	const index = contextCaseStudies.findIndex(({ slug }) => slug == params.slug);

	const data = await client.fetch<ROOT_SLUG_QUERYResult>(ROOT_SLUG_QUERY, {
		slug: params.slug
	});

	if (!data) {
		return error(404);
	}

	if (data._type === 'caseStudy' && index === -1 && !preview) {
		return error(404);
	}

	return {
		documentId: data._id,
		documentType: data._type,
		type: data._type,
		caseStudy: data._type === 'caseStudy' ? { index, ...data.caseStudy } : null,
		pageTitle: data.title,
		modules: (data.modules || []) as Module[],
		metadata: data.metadata
	} satisfies App.PageReturn;
};
