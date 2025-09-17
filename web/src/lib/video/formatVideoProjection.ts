import type { MediaProjectionVideo, SanityImageAsset } from '$sanity';
import { urlFor } from '$sanity/image';
import { stegaClean } from '@sanity/client/stega';
import type { VideoPlaybackProps, VideoProps } from './types';

function formatAspect(aspect: string): number {
	return aspect
		.split(':')
		.map((num) => parseInt(num))
		.reduce((a, b) => a / b);
}

function getPoster(image: SanityImageAsset | null, aspect: number) {
	if (!image) return undefined;
	return urlFor(image)
		.width(1440)
		.height(Math.round(1440 / aspect))
		.url();
}

function getMuxThumbnail(
	playbackId: string,
	thumbnailTime?: number | undefined
) {
	const SIZE = 1280;
	return `https://image.mux.com/${playbackId}/thumbnail.jpg?fit=crop&width=${SIZE}&height=${SIZE}&time=${thumbnailTime || 0}`;
}

function getPlaybackProps(
	video: MediaProjectionVideo
): Required<VideoPlaybackProps> {
	if (stegaClean(video.playbackSettings) === 'controls') {
		return {
			autoplay: undefined,
			controls: true,
			muted: undefined,
			loop: undefined
		};
	} else if (stegaClean(video.playbackSettings) === 'autoplay') {
		return {
			autoplay: true,
			controls: undefined,
			muted: true,
			loop: true
		};
	} else if (video.playbackSettings && video.customVideoPlayback) {
		const custom = video.customVideoPlayback;

		return {
			controls: custom.controls || undefined,
			autoplay: custom.autoplay || undefined,
			muted: custom.muted || undefined,
			loop: custom.loop || undefined
		};
	}

	return {
		autoplay: true,
		loop: true,
		muted: true,
		controls: undefined
	};
}
/**
 * Main
 */

export function formatVideoProjection(video: MediaProjectionVideo): VideoProps {
	const aspect = formatAspect(video.aspect);
	const poster = video.poster
		? getPoster(video.poster, aspect)
		: getMuxThumbnail(video.playbackId, 0); // TODO: GET POSTER TIME;
	const playbackProps = getPlaybackProps(video);

	return {
		poster,
		aspect,
		playbackId: video.playbackId,
		...playbackProps
	};
}
