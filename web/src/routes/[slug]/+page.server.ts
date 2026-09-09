import { groq } from '@sanity/sveltekit';
import { error } from '@sveltejs/kit';

import {
	type Module,
	ROOT_SLUG_QUERY,
	type ROOT_SLUG_QUERY_RESULT,
	SITE_QUERY,
	type SITE_QUERY_RESULT
} from '$lib/sanity';
import { client as clientImported } from '$sanity/client';
import { getPrerender } from '$util/getPrerender.js';

export const entries = async () => {
	const site = await clientImported.fetch<SITE_QUERY_RESULT>(SITE_QUERY, {
		contextSlug: null
	});

	const pageSlugs: { slug: string }[] = await clientImported.fetch(
		groq`*[_type == "page"]{ "slug": slug.current }`
	);

	return [
		...pageSlugs,
		...((site.context?.caseStudies
			?.map(({ slug }) => ({ slug }))
			.filter(({ slug }) => slug !== null) as { slug: string }[]) || [])
	];
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

	const data = await client.fetch<ROOT_SLUG_QUERY_RESULT>(ROOT_SLUG_QUERY, {
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
