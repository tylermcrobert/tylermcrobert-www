import { page } from '$app/state';
import { urlFor } from '$sanity/image';

export const metadata = {
	get title() {
		const { siteTitle, pageTitle, homepageTitle } = page.data;

		if (page.error) {
			return `${page.status} ${page.error.message} – ${siteTitle}`;
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
		const { pageMetadata, siteMetadata } = page.data;
		const image = pageMetadata?.image || siteMetadata?.image;
		return image ? urlFor(image).width(1200).height(630).url() : null;
	},

	get description() {
		return (
			page.data.pageMetadata?.description || page.data.siteMetadata?.description
		);
	},

	get siteTitle() {
		return page.data.siteTitle;
	}
};
