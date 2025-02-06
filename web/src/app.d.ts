// See https://kit.svelte.dev/docs/types#app

import type { Metadata, SiteQuery } from '$lib/sanity';

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			client: import('@sanity/client').SanityClient;
			isDraftMode: boolean;
		}

		interface LayoutData extends Pick<SiteQuery> {
			isDraftMode: boolean;
			siteMetadata: Metadata | null | undefined;
			siteTitle: string | null | undefined;
			homepageTitle: string | null | undefined;
			pathname: string;
			contextTitle: string | null;
			contextCaseStudies: {
				title: string | null;
				slug: string | null;
			}[];
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
}

export {};
