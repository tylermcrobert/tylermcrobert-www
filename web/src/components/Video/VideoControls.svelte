<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	import type { VideoProps } from './types';

	interface Props extends Pick<VideoProps, 'aspect' | 'class' | 'poster'> {
		children: Snippet;
	}

	let { class: className, children, aspect, poster }: Props = $props();

	let packageLoaded = $state(false);

	onMount(() => {
		import('media-chrome').then(() => {
			packageLoaded = true;
		});
	});
</script>

<media-controller
	style:aspect-ratio={aspect}
	style:background={poster ? `url('${poster}') center / cover` : undefined}
	class={[
		'controller relative flex cursor-pointer text-white outline-hidden',
		className
	]}
>
	{@render children?.()}

	{#if packageLoaded}
		<media-play-button
			class="absolute top-1/2 left-1/2 z-10 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground md:size-40"
		>
			<span slot="play">PLAY</span>
			<span slot="pause">PAUSE</span>

			<media-duration-display></media-duration-display>
			<media-time-display></media-time-display>
		</media-play-button>

		<div
			class="absolute top-1/2 z-10 flex w-full justify-between px-standard tabular-nums"
		>
			<media-time-display></media-time-display>
			<media-duration-display></media-duration-display>
		</div>

		<media-mute-button
			class="absolute bottom-standard left-1/2 z-10 -translate-x-1/2"
		>
			<span slot="high">MUTE</span>
			<span slot="off">UNMUTE</span>
		</media-mute-button>
	{/if}
</media-controller>

<style lang="postcss">
	.controller {
		--scrim-opacity: 0.3;
		--duration: 150ms;
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

		--media-font: inheret;
	}

	.controller:after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, var(--scrim-opacity));
		pointer-events: none;
		transition: var(--duration) background-color var(--ease);
	}

	.controller:global(:not([mediapaused]):not(:hover)):after,
	.controller:global(:not([mediapaused])[userinactive]):after {
		--scrim-opacity: 0;
	}

	media-time-display,
	media-duration-display {
		pointer-events: none;
		user-select: none;
	}
</style>
