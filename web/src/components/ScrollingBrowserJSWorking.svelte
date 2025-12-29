<script lang="ts">
	import BrowserFrame from './BrowserFrame.svelte';
	import type { MediaProjection } from '$sanity';
	import Media from './Media.svelte';

	type Props = { aspect: number; asset: NonNullable<MediaProjection['asset']> };
	let { aspect, asset }: Props = $props();

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

<div class="bg-black px-[10%]">
	<!-- Contained -->
	<div
		class="parent relative h-(--total-height)"
		style:--progress={progress}
		style:--image-aspect={aspect}
		bind:this={scrollerRef}
	>
		<!-- Sticky -->
		<div class="sticky top-0 grid h-lvh items-center justify-center">
			<!-- video clipped -->
			<div class="aspect-video w-full overflow-hidden rounded-md">
				<Media value={asset} sizes="100vw" alt={null} />
			</div>
		</div>
	</div>
</div>

<style>
	.parent {
		container-type: inline-size;

		/* The height that the video aspect window takes up */
		--video-height: calc(100cqi * 9 / 16);

		/* The space the non-"browser" content takes up */
		--height-minus-video: calc(100lvh - var(--video-height));

		/* The height the image in the "browser" takes up */
		--image-height: calc(100cqi * var(--image-aspect));

		/* The total height of the "browser" */
		--total-height: calc(
			var(--height-minus-video) + var(--image-height) - 100lvh
		);
	}

	:global(img) {
		--distance: calc(var(--image-height) - var(--video-height));
		--total-offset: calc((var(--progress) * var(--distance)) * -1);
		transform: translateY(var(--total-offset));
	}
</style>
