import {
	imageUrlBuilder,
	type SanityImageSource
} from '@tylermcrobert/svelte-sanity-image';
import { client } from './client';

export function urlFor(image: SanityImageSource) {
	return imageUrlBuilder(client).image(image);
}
