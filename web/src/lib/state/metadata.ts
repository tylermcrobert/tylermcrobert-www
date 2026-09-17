import { page } from '$app/state';
import { urlFor } from '$sanity/image';

/**
 * Live SEO fields from `$app/state` `page`.
 *
 * Getters (not plain fields) so each access re-reads `page` —
 * otherwise values freeze at import and go stale on navigate.
 * Read inside a template or `$derived(...)` so updates track.
 */
export const metadata = {
	get title() {
		const { siteTitle, pageTitle, homepageTitle, titleOverride } = page.data;

		if (page.error) {
			return `${page.status} ${page.error.message} – ${siteTitle}`;
		}

		if (titleOverride) {
			return titleOverride;
		}

		if (homepageTitle && page.data.pathname === '/') {
			return homepageTitle;
		}

		if (!pageTitle) {
			return siteTitle;
		}

		return `${pageTitle} – ${siteTitle}`;
	},

	get url() {
		return page.url.origin + page.url.pathname;
	},

	get imageUrl() {
		const { metadata, siteMetadata } = page.data;
		const image = metadata?.image || siteMetadata?.image;
		return image ? urlFor(image).width(1200).height(630).url() : null;
	},

	get description() {
		return (
			page.data.metadata?.description || page.data.siteMetadata?.description
		);
	},

	get siteTitle() {
		return page.data.siteTitle;
	}
};
