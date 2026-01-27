import type { SanityImageSource } from '@tylermcrobert/svelte-sanity-image';

import { urlFor } from '$sanity/image';

const POSTER_WIDTH = 1280;

export function getMuxThumbnailUrl(
	playbackId: string,
	thumbnailTime?: number | undefined
) {
	return `https://image.mux.com/${playbackId}/thumbnail.jpg?fit=crop&width=${POSTER_WIDTH}&height=${POSTER_WIDTH}&time=${thumbnailTime || 0}`;
}

/**
 * Gets the poster image URL from Sanity
 * @param sanityImage User-set poster image
 * @param videoAspect aspect of the video
 * @returns poster image URL from Sanity
 */
export function getSanityPosterUrl(
	sanityImage: SanityImageSource | null,
	videoAspect: number
) {
	if (!sanityImage) return undefined;
	return urlFor(sanityImage)
		.width(POSTER_WIDTH)
		.height(Math.round(POSTER_WIDTH / videoAspect))
		.url();
}

/**
 * Formats an aspect string into a number
 * @param aspectStr the aspect string (e.g. "16:9")
 * @returns the aspect ratio as a number (e.g. 1.777... )
 */
export function parseAspectStr(aspectStr: string): number {
	return aspectStr
		.split(':')
		.map((num) => parseInt(num))
		.reduce((a, b) => a / b);
}
