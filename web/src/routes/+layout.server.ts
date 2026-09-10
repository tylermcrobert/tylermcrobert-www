import { SITE_QUERY } from '$lib/sanity';

export const load = async ({
	url: { pathname },
	locals: {
		sanity: { client, previewEnabled }
	},
	cookies
}) => {
	const contextSlug = cookies.get('context')?.toString() || null;
	const site = await client.fetch(SITE_QUERY, {
		contextSlug
	});
	const { settings, homepageTitle, context } = site;

	return {
		googleAnalyticsId: settings?.googleAnalyticsId || null,
		previewEnabled,
		pathname,
		contextCaseStudies: context?.caseStudies || [],
		homepageTitle: homepageTitle,
		contextTitle: (contextSlug && context?.title) || null,
		siteTitle: settings?.siteTitle,
		siteMetadata: settings?.metadata
	} satisfies App.LayoutData;
};
