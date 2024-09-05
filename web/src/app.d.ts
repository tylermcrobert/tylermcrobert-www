// See https://kit.svelte.dev/docs/types#app

import type { Metadata, SiteQuery } from '$sanity';

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			client: import('@sanity/client').SanityClient;
			isDraftMode: boolean;
		}

		interface LayoutData extends Pick<SiteQuery, 'footer' | 'navigation'> {
			isDraftMode: boolean;
			siteMetadata: Metadata | null | undefined;
			siteTitle: string | null | undefined;
		}

		interface PageData extends LayoutData {
			pageTitle: string | null | undefined;
			metadata: Metadata | null | undefined;
		}

		// interface Error {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
