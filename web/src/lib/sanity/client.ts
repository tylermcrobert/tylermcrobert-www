import { createClient } from '@sanity/sveltekit';

import {
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_STUDIO_URL
} from '$env/static/public';

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: true,
	apiVersion: '2025-10-21',
	stega: {
		enabled: false,
		studioUrl: PUBLIC_SANITY_STUDIO_URL
	}
});
