<script lang="ts">
	import BrowserFrame from './BrowserFrame.svelte';
	import type { MediaProjection } from '$sanity';
	import Media from './Media.svelte';

	type Props = {
		height: number;
		aspect: number;
		asset: NonNullable<MediaProjection['asset']>;
	};
	let { height, aspect, asset }: Props = $props();

	let browserFrameSize = $state(0);
	let scrollerRef = $state<HTMLElement | null>(null);
	let progress = $state(0);

	function handleScroll() {
		if (!scrollerRef) {
			throw new Error('Cant find scroller ref');
		}
		const rect = scrollerRef.getBoundingClientRect();
		const progressUnclamped = -rect.top / (rect.height - window.innerHeight);
		const progressClamped = Math.max(Math.min(progressUnclamped, 1), 0);
		progress = progressClamped;
	}
</script>

<svelte:window onscroll={handleScroll} />

<!-- Contained -->
{height}
<div
	class="parent relative h-(--total-height) bg-black px-[10%]"
	style:--progress={progress}
	style:--image-height={height}
	style:--browser-frame-size={browserFrameSize}
	bind:this={scrollerRef}
>
	<div class="sticky top-0 grid h-lvh items-center justify-center">
		<div
			class="browser-frame aspect-video w-full overflow-hidden rounded-md"
			bind:offsetHeight={browserFrameSize}
		>
			<Media
				value={asset}
				sizes="100vw"
				alt={null}
				class="translate-y-(--image-offset)"
			/>
		</div>
	</div>
</div>

<style>
	.parent {
		--speed: 0.3;
		height: calc(var(--image-height) * var(--speed) * 1px);

		/* prettier-ignore */
		--transform-full: calc(var(--progress) * -100%);
		/* prettier-ignore */
		--transform-window-offset: calc(var(--progress) * (var(--browser-frame-size)));

		/* asdf */
		/* prettier-ignore */
		--image-offset: calc((var(--transform-full) + var(--transform-window-offset) * 1px));
	}

	.browser-frame {
	}
</style>
