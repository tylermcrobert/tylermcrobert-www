import {
	CASE_STUDY_QUERY,
	PAGE_QUERY,
	type CaseStudyQuery,
	type PageQuery
} from '$sanity';
import { error } from '@sveltejs/kit';

export const load = async ({
	parent,
	params,
	locals: { client, isDraftMode }
}) => {
	const { contextCaseStudies } = await parent();

	const index = contextCaseStudies.findIndex(({ slug }) => slug == params.slug);

	if (index === -1 && !isDraftMode) {
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
