import {
	CASE_STUDY_QUERY,
	PAGE_QUERY,
	type CaseStudyQuery,
	type PageQuery
} from '$lib/sanity';
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

	if (index === -1 && !previewEnabled) {
		return error(404);
	}

	const caseStudy = await client.fetch<CaseStudyQuery>(CASE_STUDY_QUERY, {
		slug: params.slug
	});

	if (caseStudy) {
		return {
			caseStudy: caseStudy,
			pageTitle: caseStudy.title,
			modules: caseStudy.modules || [],
			metadata: caseStudy.metadata,
			index: index
		} satisfies App.PageReturn;
	}

	const page = await client.fetch<PageQuery>(PAGE_QUERY, { slug: params.slug });

	if (page) {
		return {
			pageTitle: page.title,
			metadata: page.metadata,
			modules: page.modules || []
		} satisfies App.PageReturn;
	}

	return error(404);
};
