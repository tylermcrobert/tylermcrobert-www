import type { HTMLImgAttributes } from 'svelte/elements';
import type { ClassValue } from 'svelte/elements';

type MediaResolution =
	| '270p'
	| '360p'
	| '480p'
	| '540p'
	| '720p'
	| '1080p'
	| '1440p'
	| '2160p';

export type VideoPlaybackProps = {
	[key in 'autoplay' | 'loop' | 'muted' | 'controls']: true | undefined;
};

export type VideoProps = HTMLImgAttributes & {
	class?: ClassValue;
	maxResolution?: MediaResolution;
	playbackId: string;
	aspect: number;
	poster?: string;
} & VideoPlaybackProps;
