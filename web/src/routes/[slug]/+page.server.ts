import { error } from '@sveltejs/kit';

import {
	type Module,
	PAGE_SLUGS_QUERY,
	ROOT_SLUG_QUERY,
	SITE_QUERY
} from '$lib/sanity';
import { client as clientImported } from '$sanity/client';
import { getPrerender } from '$util/getPrerender.js';

export const entries = async () => {
	const site = await clientImported.fetch(SITE_QUERY, {
		contextSlug: null
	});

	const pageSlugs = await clientImported.fetch(PAGE_SLUGS_QUERY);
	const caseStudiesSlugs =
		site.context?.caseStudies?.map(({ slug }) => ({ slug })) ?? [];

	return [...pageSlugs, ...caseStudiesSlugs];
};

export const load = async ({
	parent,
	params,
	locals: {
		sanity: { client, previewEnabled }
	}
}) => {
	const { contextCaseStudies } = (await parent()) as App.LayoutData;

	const index = contextCaseStudies.findIndex(({ slug }) => slug == params.slug);

	const data = await client.fetch(ROOT_SLUG_QUERY, {
		slug: params.slug
	});

	if (!data) {
		return error(404);
	}

	if (data._type === 'caseStudy' && index === -1 && !previewEnabled) {
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

export const prerender = getPrerender();
