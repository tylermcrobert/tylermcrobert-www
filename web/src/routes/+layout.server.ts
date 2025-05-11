import { SITE_QUERY, type SiteQuery } from '$sanity';

export const load = async ({
	locals: {
		sanity: { previewEnabled, client }
	},
	url: { pathname }
}) => {
	const { footer, navigation, settings, homepageTitle } =
		await client.fetch<SiteQuery>(SITE_QUERY);

	return {
		googleAnalyticsId: settings?.googleAnalyticsId,
		navigation,
		footer,
		previewEnabled,
		pathname,
		homepageTitle: homepageTitle,
		siteTitle: settings?.siteTitle,
		siteMetadata: settings?.metadata
	} satisfies App.LayoutData;
};
