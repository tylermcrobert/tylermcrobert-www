<script lang="ts">
	import type { MediaProjectionVideo } from '$sanity';
	import { urlFor } from '$sanity/image';
	import type { ClassValue } from 'svelte/elements';
	import PauseIcon from './icons/PauseIcon.svelte';
	import PlayIcon from './icons/PlayIcon.svelte';
	import VolumeMuted from './icons/VolumeMuted.svelte';
	import VolumePlaying from './icons/VolumePlaying.svelte';
	import { getAspect } from '$lib/util';
	import { onMount } from 'svelte';

	type Props = {
		class?: ClassValue;
	} & Pick<MediaProjectionVideo, 'aspect' | 'playbackId' | 'posterFrame'>;

	let { class: className, playbackId, aspect, posterFrame }: Props = $props();

	let loaded = $state(false);

	onMount(() => {
		Promise.all([import('media-chrome'), import('@mux/mux-video')]).then(() => {
			loaded = true;
		});
	});
</script>

<media-controller
	style:aspect-ratio={getAspect(aspect)}
	class={[
		'controller outline-hidden relative block cursor-pointer bg-transparent',
		className
	]}
>
	{#if loaded}
		<mux-video
			poster={posterFrame &&
				urlFor(posterFrame)
					.width(1440)
					.height(Math.round(1440 / getAspect(aspect)))
					.url()}
			autoplay
			playback-id={playbackId}
			playsinline
			slot="media"
			class="w-full"
		>
		</mux-video>

		<media-play-button class="z-10 w-8 md:w-14" slot="centered-chrome">
			<span slot="play" class="w-full"><PlayIcon /></span>
			<span slot="pause" class="w-full"><PauseIcon /></span>
		</media-play-button>

		<media-control-bar
			class="absolute inset-x-0 bottom-0 z-10 flex gap-5 px-6 py-4"
		>
			<media-mute-button>
				<span slot="low" class="w-4"><VolumePlaying /></span>
				<span slot="off" class="w-4"><VolumeMuted /></span>
			</media-mute-button>
			<media-time-display></media-time-display>
			<media-time-range><span slot="preview"></span></media-time-range>
			<media-duration-display></media-duration-display>
		</media-control-bar>
	{/if}
</media-controller>

<style lang="postcss">
	.controller {
		--duration: 300ms;
		--ease: cubic-bezier(0.4, 0, 0.6, 1);
		--scrim-opacity: 0.2;

		/* Overall */
		--media-control-background: transparent;
		--media-control-hover-background: transparent;
		--media-primary-color: #fff;

		/* Control Bar */
		--media-button-padding: 0px;
		--media-control-padding: 0px;
		--media-tooltip-display: none;

		/* Range */
		--media-range-thumb-width: 4px;
		--media-range-thumb-height: 4px;
		--media-range-thumb-transition: transform 500ms ease, opacity 500ms ease;
		--media-range-thumb-opacity: 0;
		--media-preview-time-margin: 0 0 -16px;
		--media-range-track-border-radius: 999999px;
	}

	.controller:after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, var(--scrim-opacity));
		pointer-events: none;
		transition: var(--duration) background-color var(--ease);
	}

	.controller:global([userinactive]):after {
		background: rgba(0, 0, 0, 0);
	}

	.controller:global([userinactive]):after {
		background: rgba(0, 0, 0, 0);
	}

	.controller:global([userinactive]) media-control-bar,
	.controller:global(:not([mediahasplayed])) media-control-bar {
		opacity: 0;
		transform: translateY(8px);
	}

	media-control-bar {
		transition:
			opacity var(--duration) var(--ease),
			transform var(--duration) var(--ease);
	}

	media-control-bar:hover {
		--media-range-thumb-transform: scale(2.5);
		--media-range-thumb-opacity: 1;
	}

	media-time-display,
	media-duration-display {
		pointer-events: none;
		user-select: none;
	}
</style>
