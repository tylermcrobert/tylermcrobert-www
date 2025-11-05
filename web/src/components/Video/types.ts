import type { Attributes } from '@mux/mux-video';
import type { MuxMediaPropTypes } from '@mux/playback-core';
import type { HTMLVideoAttributes } from 'svelte/elements';
import type { ClassValue } from 'svelte/elements';

/**
 * Props that control the playback of the video as true/undefined
 * so that false values are not passed to the <mux-video> element.
 */
export type VideoPlaybackProps = {
	[key in 'autoplay' | 'loop' | 'muted' | 'controls']: true | undefined;
};

/**
 * Available resolutions for the video.
 * See: https://www.mux.com/docs/guides/control-playback-resolution
 */
type MediaResolution =
	| '270p'
	| '360p'
	| '480p'
	| '540p'
	| '720p'
	| '1080p'
	| '1440p'
	| '2160p';

type MuxPlaybackOptions = {
	/**
	 * Specify where in the media's timeline you want playback to start.
	 */
	[Attributes.ASSET_START_TIME]?: MuxMediaPropTypes['startTime'];
	/**
	 * Apply media timeline-based instant clips to the beginning of the media stream.
	 */
	[Attributes.ASSET_START_TIME]?: MuxMediaPropTypes['assetStartTime'];
	/**
	 * Apply media timeline-based instant clips to the end of the media stream.
	 */
	[Attributes.ASSET_END_TIME]?: MuxMediaPropTypes['assetEndTime'];
	/**
	 * Specify the minimum resolution you want delivered for this video.
	 */
	[Attributes.MIN_RESOLUTION]?: MediaResolution;
	/**
	 * Specify the maximum resolution you want delivered for this video.
	 */
	[Attributes.MAX_RESOLUTION]?: MediaResolution;
};

export type VideoProps = {
	/**
	 * Class of the video. Will be provided either to the mux-video or media-controller element.
	 */
	class?: ClassValue;
	/**
	 * Mux Video Playback ID.
	 */
	playbackId: string;

	/**
	 * Aspect ratio of the video. Required to prevent layout shifts.
	 */
	aspect: number;

	/**
	 * URL of the poster image.
	 */
	poster?: string;

	/**
	 * Whether to lazy load the Mux Video package.
	 * Lazy loading is reccommended but if the video is above the fold it might be better to load it immediately.
	 */
	lazyLoadMuxVideoPackage?: boolean;
} & HTMLVideoAttributes &
	VideoPlaybackProps &
	MuxPlaybackOptions;
