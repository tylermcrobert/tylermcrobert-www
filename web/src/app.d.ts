// See https://kit.svelte.dev/docs/types#app

import type { Metadata, SiteQuery } from '$sanity';
import type { SanityLocals } from '@sanity/sveltekit';

// for information about these interfaces
declare global {
	namespace App {
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		interface Locals extends SanityLocals {}

		interface LayoutData extends Pick<SiteQuery> {
			previewEnabled: boolean;
			siteMetadata: Metadata | null | undefined;
			siteTitle: string | null | undefined;
			homepageTitle: string | null | undefined;
			pathname: string;
			contextTitle: string | null;
			contextCaseStudies: {
				title: string | null;
				slug: string | null;
			}[];
			googleAnalyticsId: string | null;
		}

		interface PageReturn extends Record<string, unknown> {
			pageTitle: string | null;
			metadata: Metadata | null;
			titleOverride?: string | null;
		}

		interface PageData extends LayoutData, PageReturn {}

		// interface Error {}
		// interface PageState {}
		// interface Platform {}
	}

	// For Analytics.svelte
	declare interface Window {
		dataLayer: IArguments[];
	}
}

export {};
