<script lang="ts">
	import type { MediaProjectionVideo } from '$sanity';
	import { urlFor } from '$sanity/image';
	import PauseIcon from './icons/PauseIcon.svelte';
	import PlayIcon from './icons/PlayIcon.svelte';
	import VolumeMuted from './icons/VolumeMuted.svelte';
	import VolumePlaying from './icons/VolumePlaying.svelte';
	import VideoWrapper from './VideoWrapper.svelte';

	type Props = {
		video: MediaProjectionVideo;
		class?: string;
	};

	let { video, class: className }: Props = $props();
</script>

<VideoWrapper {video} class={className}>
	{#snippet children({ aspect })}
		{#await Promise.all( [import('media-chrome'), import('@mux/mux-video')] ) then}
			<media-controller class="controller">
				<mux-video
					poster={video?.posterFrame &&
						urlFor(video?.posterFrame)
							.width(1440)
							.height(Math.round(1440 / aspect))
							.url()}
					playback-id={video?.id}
					metadata-viewer-user-id="s4u780"
					playsinline
					slot="media"
					style:transform="scale(1.001)"
					style:--media-object-fit="cover"
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
			</media-controller>
		{/await}
	{/snippet}
</VideoWrapper>

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

		@apply absolute inset-0 cursor-pointer bg-transparent;
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
