import { stegaClean } from '@sanity/sveltekit';

import type { VideoPlaybackProps, VideoProps } from '$components/Video/types';
import type { MediaProjectionVideo, SanityImageAsset } from '$sanity';
import { urlFor } from '$sanity/image';

const POSTER_WIDTH = 1280;

/**
 * Converts a MediaProjectionVideo into VideoProps for the Video component
 * @param mediaProjectionVideo the "video" projection of a "media projection"
 * @returns Props that are ready for the Video component
 */
export function formatVideoProps(
	mediaProjectionVideo: MediaProjectionVideo,
	videoProps: Partial<VideoProps> | undefined = {}
): VideoProps {
	const {
		playbackId,
		poster: sanityPosterImage,
		aspect: aspectStr
	} = mediaProjectionVideo;

	const assetAspect = parseAspectStr(aspectStr);
	const playbackProps = getPlaybackOptionProps(mediaProjectionVideo);

	return {
		...playbackProps,
		...videoProps,
		poster:
			videoProps?.poster || sanityPosterImage
				? getSanityPosterUrl(sanityPosterImage, assetAspect)
				: getMuxThumbnailUrl(playbackId, 0.0), // TODO: GET POSTER TIME,
		aspect: videoProps?.aspect || assetAspect,
		playbackId
	};
}

/**
 *
 * @param video
 * @returns
 */

function getPlaybackOptionProps({
	playbackSettings,
	customVideoPlayback
}: MediaProjectionVideo): Required<VideoPlaybackProps> {
	const preset = stegaClean(playbackSettings);

	if (preset === 'controls') {
		return {
			autoplay: undefined,
			controls: true,
			muted: undefined,
			loop: undefined
		};
	} else if (preset === 'autoplay') {
		return {
			autoplay: true,
			controls: undefined,
			muted: true,
			loop: true
		};
	} else if (playbackSettings && customVideoPlayback) {
		// Maps boolean settings to true/undefined
		return {
			controls: customVideoPlayback.controls || undefined,
			autoplay: customVideoPlayback.autoplay || undefined,
			muted: customVideoPlayback.muted || undefined,
			loop: customVideoPlayback.loop || undefined
		};
	}

	return {
		autoplay: true,
		loop: true,
		muted: true,
		controls: undefined
	};
}

function getMuxThumbnailUrl(
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
function getSanityPosterUrl(
	sanityImage: SanityImageAsset | null,
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
function parseAspectStr(aspectStr: string): number {
	return aspectStr
		.split(':')
		.map((num) => parseInt(num))
		.reduce((a, b) => a / b);
}
