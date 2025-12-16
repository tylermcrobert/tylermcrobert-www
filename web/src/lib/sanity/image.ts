import {
	createImageUrlBuilder,
	type SanityImageSource
} from '@tylermcrobert/svelte-sanity-image';

import {
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_PROJECT_ID
} from '$env/static/public';

export function urlFor(image: SanityImageSource) {
	return createImageUrlBuilder({
		projectId: PUBLIC_SANITY_PROJECT_ID,
		dataset: PUBLIC_SANITY_DATASET
	}).image(image);
}
