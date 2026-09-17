import {
	createImageUrlBuilder,
	type SanityImageSource
} from '@tylermcrobert/svelte-sanity-image';

import { client } from './client';

export function urlFor(image: SanityImageSource) {
	return createImageUrlBuilder(client).image(image);
}
