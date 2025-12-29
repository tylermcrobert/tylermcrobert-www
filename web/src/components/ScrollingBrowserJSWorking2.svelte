<script lang="ts">
	import BrowserFrame from './BrowserFrame.svelte';
	import type { MediaProjection } from '$sanity';
	import Media from './Media.svelte';
	import type { Attachment } from 'svelte/attachments';
	import { scrollY } from 'svelte/reactivity/window';

	type Props = {
		aspect: number;
		asset: NonNullable<MediaProjection['asset']>;
	};
	let { aspect, asset }: Props = $props();

	let progress = $state(0);

	const scroller: Attachment = (element) => {
		let frameId: number;
		let running = true;

		function updateProgress() {
			if (!running) return;
			const rect = element.getBoundingClientRect();
			const progressUnclamped = -rect.top / (rect.height - window.innerHeight);
			const progressClamped = Math.max(Math.min(progressUnclamped, 1), 0);
			progress = progressClamped;

			frameId = requestAnimationFrame(updateProgress);
		}

		frameId = requestAnimationFrame(updateProgress);

		return () => {
			running = false;
			cancelAnimationFrame(frameId);
		};
	};
</script>

<div
	style:--progress={progress}
	style:--image-aspect={aspect}
	style:--frame-aspect={16 / 9}
	{@attach scroller}
	class="scrollweb-container bg-black px-[10%]"
>
	<div class="@container">
		<div class="h-(--scroll-distance)">
			<div class="sticky top-0 grid h-lvh place-items-center">
				<div class="grid aspect-(--frame-aspect) overflow-hidden rounded-md">
					<Media
						value={asset}
						sizes="100vw"
						alt={null}
						class="translate-y-(--image-offset)"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- prettier-ignore -->
<style>
	.scrollweb-container {

    /* 
    Scroll distance
    */

		/* Browser frame height: { width of container } / { aspect ratio of the browser frame } */
		--calc-browser-frame-height: calc(100cqi / var(--frame-aspect));
		/* Y Negative Space: { height of the container } - { height of the browser frame } */
		--calc-y-negative-space: calc(100lvh - var(--calc-browser-frame-height));
		/* Final Value */
		--scroll-distance: calc((100cqi / var(--image-aspect)) + var(--calc-y-negative-space)
		);

		/* 
    Image Offset
    */

		/* This translates the image -100% but completely off the screen */
		--calc-img-total-offset: calc(-100% * var(--progress));
		/* This translates the browser frame down by the height of the browser frame */
		--calc-img-browser-frame-offset: calc((var(--calc-browser-frame-height) * var(--progress)));
		/* Final Image Offset */
		--image-offset: calc(var(--calc-img-total-offset) + var(--calc-img-browser-frame-offset)
		);
	}
</style>
