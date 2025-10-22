import { SITE_QUERY, type SiteQuery } from '$lib/sanity';

export const load = async ({
	locals: { preview, client  
	},
	url: { pathname },
	cookies
}) => {
	const contextSlug = cookies.get('context')?.toString() || null;
	const site = await client.fetch<SiteQuery>(SITE_QUERY, { contextSlug });
	const { settings, homepageTitle, context } = site;

	return {
		googleAnalyticsId: settings?.googleAnalyticsId || null,
		preview,
		pathname,
		contextCaseStudies: context?.caseStudies || [],
		homepageTitle: homepageTitle,
		contextTitle: (contextSlug && context?.title) || null,
		siteTitle: settings?.siteTitle,
		siteMetadata: settings?.metadata
	} satisfies App.LayoutData;
};
