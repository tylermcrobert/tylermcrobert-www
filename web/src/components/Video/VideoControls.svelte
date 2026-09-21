<script lang="ts">
	import '@videojs/html/video/player';
	import '@videojs/html/ui/container';
	import '@videojs/html/ui/controls';
	import '@videojs/html/ui/mute-button';
	import '@videojs/html/ui/play-button';
	import '@videojs/html/ui/time';
	import '@videojs/html/ui/time-slider';
	import '@videojs/html/ui/slider-value';
	import '@videojs/html/ui/gesture';

	import type { VideoPlayerStore } from '@videojs/html';
	import type { VideoPlayerElement } from '@videojs/html/video';
	import { type Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	import PauseIcon from './icons/PauseIcon.svelte';
	import PlayIcon from './icons/PlayIcon.svelte';
	import VolumeMuted from './icons/VolumeMuted.svelte';
	import VolumePlaying from './icons/VolumePlaying.svelte';

	interface Props {
		children: Snippet;
		class?: ClassValue;
		hasSound?: boolean;
	}

	let { children, class: className, hasSound }: Props = $props();

	let store: VideoPlayerStore | undefined = $state();
	let paused = $derived(store?.paused ?? true);
	let userActive = $derived(store?.userActive);
	let muted = $derived(store?.muted);
	let started = $derived(store?.started);
</script>

<video-player
	class={[
		'@container relative block cursor-pointer overflow-hidden',
		className
	]}
	{@attach (player: VideoPlayerElement) => {
		const sync = () => (store = player.store);
		sync();
		return player.store.subscribe(sync);
	}}
>
	<media-container
		tabindex="-1"
		class={[
			'display-contents relative cursor-pointer overflow-hidden text-white'
		]}
	>
		{@render children?.()}
		{@render playPause()}
		{@render controlBar()}

		<media-gesture
			type="tap"
			action="togglePaused"
			pointer="mouse"
			region="center"
		></media-gesture>
	</media-container>
</video-player>

{#snippet playPause()}
	{@const Icons = [PlayIcon, PauseIcon]}

	<media-play-button
		class={[
			'absolute top-1/2 left-1/2 z-10 w-14 -translate-x-1/2 -translate-y-1/2',
			'transition-all duration-300',
			!userActive && !paused && 'translate-y-2.5 opacity-0'
		]}
	>
		{#each Icons as Icon, index (index)}
			{@const activeClass = 'scale-100 opacity-100 delay-50'}
			{@const inactiveClass = '-translate-y-1/2 scale-50 opacity-0'}

			<Icon
				class={[
					'absolute top-1/2 left-1/2 w-14 -translate-x-1/2 transition-all duration-200 @2xl:w-20 @4xl:w-22',
					inactiveClass,
					index === 0 && paused && activeClass, // play icon
					index === 1 && !paused && activeClass // pause icon
				]}
			/>
		{/each}
	</media-play-button>
{/snippet}

{#snippet controlBar()}
	<div
		class={[
			'absolute inset-x-0 bottom-0 z-10 flex h-16 items-center gap-5 px-6',
			'transition-[opacity,translate] duration-300',
			'bg-linear-to-b from-transparent to-black/30',
			(!userActive || !started) && 'translate-y-2 opacity-0'
		]}
	>
		{#if hasSound}
			<media-mute-button
				class="grid size-6 shrink-0 cursor-pointer place-items-center"
			>
				{#if muted}
					<VolumeMuted />
				{:else}
					<VolumePlaying />
				{/if}
			</media-mute-button>
		{/if}

		<media-time type="current" class="tabular-nums"></media-time>

		{@render slider()}

		<media-time type="duration" class="tabular-nums"></media-time>
	</div>
{/snippet}

{#snippet slider()}
	<media-time-slider class="group relative grid h-full flex-1 items-center">
		<media-slider-track class="relative block h-1 rounded-full bg-current/30">
			<media-slider-fill
				class={[
					'block h-full rounded-full bg-current',
					'w-(--media-slider-fill) in-data-dragging:w-(--media-slider-pointer)'
				]}
			></media-slider-fill>
		</media-slider-track>

		<media-slider-thumb
			class={[
				'absolute top-1/2 z-10 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-transform duration-300',
				'left-(--media-slider-fill) in-data-dragging:left-(--media-slider-pointer)',
				'group-data-pointing:scale-250'
			]}
		></media-slider-thumb>

		<div
			class={[
				'absolute top-1/2 z-0 hidden h-1 w-px -translate-y-1/2 group-data-pointing:block',
				// Make black if the pointer is to the left of the fill, otherwise make it white
				'left-(--media-slider-pointer) bg-[color-mix(in_srgb,black_calc(50%+50%*sign(calc(var(--media-slider-fill)-var(--media-slider-pointer)))),currentColor)]'
			]}
		></div>

		<media-slider-value
			type="pointer"
			class={[
				'pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-[calc(50%+2rem)] whitespace-nowrap tabular-nums opacity-0 transition-opacity',
				'left-(--media-slider-pointer) group-data-pointing:opacity-100'
			]}
		></media-slider-value>
	</media-time-slider>
{/snippet}
