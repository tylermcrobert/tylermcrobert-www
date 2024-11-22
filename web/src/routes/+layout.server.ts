import { SITE_QUERY, type SiteQuery } from '$sanity';

export const load = async ({
	locals: { isDraftMode, client },
	url: { pathname }
}) => {
	const { footer, navigation, settings } =
		await client.fetch<SiteQuery>(SITE_QUERY);

	const data: App.LayoutData = {
		navigation,
		footer,
		isDraftMode,
		siteTitle: settings?.siteTitle,
		siteMetadata: settings?.metadata
	};

	return { ...data, pathname };
};
