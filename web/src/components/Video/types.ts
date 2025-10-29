import { Attributes } from '@mux/mux-video';
import type { MuxMediaPropTypes } from '@mux/playback-core';
import type { HTMLVideoAttributes } from 'svelte/elements';
import type { ClassValue } from 'svelte/elements';

export type VideoPlaybackProps = {
	[key in 'autoplay' | 'loop' | 'muted' | 'controls']: true | undefined;
};

// https://www.mux.com/docs/guides/control-playback-resolution
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
	[Attributes.ASSET_START_TIME]?: MuxMediaPropTypes['startTime'];
	[Attributes.ASSET_START_TIME]?: MuxMediaPropTypes['assetStartTime'];
	[Attributes.ASSET_END_TIME]?: MuxMediaPropTypes['assetEndTime'];
	[Attributes.MIN_RESOLUTION]?: MediaResolution;
	[Attributes.MAX_RESOLUTION]?: MediaResolution;
};

export type VideoProps = {
	playbackId: string;
	aspect: number;
	class?: ClassValue;
	poster?: string;
} & HTMLVideoAttributes &
	VideoPlaybackProps &
	MuxPlaybackOptions;
