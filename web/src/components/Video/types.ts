import type { ClassValue, HTMLVideoAttributes } from 'svelte/elements';

/**
 * Props for the Video component.
 */
export interface VideoProps extends VideoPropsBase {
	/** Aspect ratio of the video. Required to prevent layout shifts. */
	aspect: number;

	/** Load the Mux Video package on mount instead of waiting for intersection. Use for hero autoplay. */
	eager?: boolean;

	/** Class name for the video container. */
	class?: ClassValue;

	/** Whether the video has audio. */
	hasSound?: boolean;
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
