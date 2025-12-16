import type { Attributes } from '@mux/mux-video';
import type { MuxMediaPropTypes } from '@mux/playback-core';
import type { HTMLVideoAttributes } from 'svelte/elements';

/**
 * Props for the Video component.
 */
export interface VideoProps extends VideoPropsBase, MuxPlaybackOptions {
	/** Mux Video Playback ID. */
	playbackId: string;

	/** Aspect ratio of the video. Required to prevent layout shifts. */
	aspect: number;

	/** Whether to lazy load the Mux Video package. Lazy loading is reccommended but if the video is above the fold it might be better to load it immediately. */
	lazyLoadMuxVideoPackage?: boolean;
}

/**
 * Record of boolean video keys and their true or undefined values
 */

interface VideoPropsBase
	extends
		Omit<HTMLVideoAttributes, BoolPlaybackKeys>,
		VideoPlaybackTrueOrUndefined {}

export type VideoPlaybackTrueOrUndefined = Record<
	BoolPlaybackKeys,
	true | undefined
>;

type BoolPlaybackKeys = 'autoplay' | 'loop' | 'muted' | 'controls';

/**
 * Supported playback options for the `<mux-video>` element.
 */
interface MuxPlaybackOptions {
	/** Specify where in the media's timeline you want playback to start. */
	[Attributes.START_TIME]?: MuxMediaPropTypes['startTime'];
	/** Apply media timeline-based instant clips to the beginning of the media stream. */
	[Attributes.ASSET_START_TIME]?: MuxMediaPropTypes['assetStartTime'];
	/** Apply media timeline-based instant clips to the end of the media stream. */
	[Attributes.ASSET_END_TIME]?: MuxMediaPropTypes['assetEndTime'];
	/** Specify the minimum resolution you want delivered for this video. */
	[Attributes.MIN_RESOLUTION]?: MuxMediaResolution;
	/** Specify the maximum resolution you want delivered for this video. */
	[Attributes.MAX_RESOLUTION]?: MuxMediaResolution;
}

/**
 * Available resolutions for the video. See: https://www.mux.com/docs/guides/control-playback-resolution
 */
type MuxMediaResolution =
	| '270p'
	| '360p'
	| '480p'
	| '540p'
	| '720p'
	| '1080p'
	| '1440p'
	| '2160p';
