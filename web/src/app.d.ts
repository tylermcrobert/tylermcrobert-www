// See https://kit.svelte.dev/docs/types#app

import type { Metadata, SiteQuery } from '$sanity';
import type { VisualEditingLocals } from '@sanity/visual-editing/svelte';

// for information about these interfaces
declare global {
	namespace App {
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		interface Locals extends VisualEditingLocals {}

		interface LayoutData extends Pick<SiteQuery> {
			preview: boolean;
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

		/* eslint-disable @typescript-eslint/no-explicit-any */
		gtag?: (...args: any[]) => void;
	}
}

export {};
