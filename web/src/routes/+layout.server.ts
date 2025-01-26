import { SITE_QUERY, type SiteQuery } from '$sanity';

export const load = async ({
	locals: { isDraftMode, client },
	url: { pathname }
}) => {
	const { footer, navigation, settings, homepageTitle } =
		await client.fetch<SiteQuery>(SITE_QUERY);

	return {
		navigation,
		footer,
		isDraftMode,
		pathname,
		homepageTitle: homepageTitle,
		siteTitle: settings?.siteTitle,
		siteMetadata: settings?.metadata
	} satisfies App.LayoutData;
};
