import { SITE_QUERY, type SiteQuery } from '$sanity';

export const load = async ({
	locals: { isDraftMode, client },
	url: { pathname }
}) => {
	const contextSlug = 'apple';
	const { settings, homepageTitle, context } = await client.fetch<SiteQuery>(
		SITE_QUERY,
		{ contextSlug }
	);

	return {
		isDraftMode,
		pathname,
		contextCaseStudies: context?.caseStudies || [],
		homepageTitle: homepageTitle,
		contextTitle: (contextSlug && context?.title) || null,
		siteTitle: settings?.siteTitle,
		siteMetadata: settings?.metadata
	} satisfies App.LayoutData;
};
