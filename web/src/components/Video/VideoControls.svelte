<script lang="ts">
	import { type Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	import { browser } from '$app/environment';

	import PauseIcon from './icons/PauseIcon.svelte';
	import PlayIcon from './icons/PlayIcon.svelte';
	import VolumeMuted from './icons/VolumeMuted.svelte';
	import VolumePlaying from './icons/VolumePlaying.svelte';

	type Props = {
		class?: ClassValue;
		aspect: number;
		children: Snippet;
		poster?: string;
	};

	let { class: className, children, aspect, poster }: Props = $props();

	let packageLoaded = $state(false);

	if (browser) {
		import('media-chrome').then(() => (packageLoaded = true));
	}
</script>

<media-controller
	style:aspect-ratio={aspect}
	style:--scrim-opacity={packageLoaded ? 0.2 : 0}
	style:background={poster ? `url('${poster}') center / cover` : undefined}
	class={[
		'controller relative flex cursor-pointer text-white outline-hidden',
		className
	]}
>
	{@render children?.()}

	{#if packageLoaded}
		<media-play-button class="z-10" slot="centered-chrome">
			<span slot="play" class="w-8 md:w-14"><PlayIcon /></span>
			<span slot="pause" class="w-8 md:w-14"><PauseIcon /></span>
		</media-play-button>

		<media-control-bar
			class="absolute inset-x-0 bottom-0 z-10 flex gap-5 px-6 py-4"
		>
			<media-mute-button>
				<span slot="high" class="w-4"><VolumePlaying /></span>
				<span slot="off" class="w-4"><VolumeMuted /></span>
			</media-mute-button>
			<media-time-display></media-time-display>
			<media-time-range><span slot="preview"></span></media-time-range>
			<media-duration-display></media-duration-display>
		</media-control-bar>
	{:else}
		<!-- Initial play button -->
		<span class="absolute inset-0 grid place-items-center">
			<div class="w-8 md:w-14">
				<PlayIcon />
			</div>
		</span>
	{/if}
</media-controller>

<style lang="postcss">
	.controller {
		--duration: 300ms;
		--ease: cubic-bezier(0.4, 0, 0.6, 1);

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
