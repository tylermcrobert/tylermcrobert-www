// See https://kit.svelte.dev/docs/types#app

import type { Metadata, SiteQuery } from '$sanity';
import type { SanityLocals } from '@sanity/sveltekit';

// for information about these interfaces
declare global {
	namespace App {
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		interface Locals extends SanityLocals {}

		interface LayoutData extends Pick<SiteQuery, 'footer' | 'navigation'> {
			previewEnabled: boolean;
			siteMetadata: Metadata | null | undefined;
			siteTitle: string | null | undefined;
			homepageTitle: string | null | undefined;
			pathname: string;
			googleAnalyticsId: string | null | undefined;
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
