// See https://kit.svelte.dev/docs/types#app

import type { Metadata, SiteQuery } from '$sanity';

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
		}

		interface PageReturn extends Record<string, unknown> {
			pageTitle: string | null;
			metadata: Metadata | null;
		}

		interface PageData extends LayoutData, PageReturn {}

		// interface Error {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
