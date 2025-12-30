<script lang="ts">
<<<<<<< HEAD
	import BrowserFrame from './BrowserFrame.svelte';
	import type { MediaProjection } from '$sanity';
=======
	import type { MediaProjection } from '$sanity';

	import BrowserFrame from './BrowserFrame.svelte';
>>>>>>> main
	import Media from './Media.svelte';

	type Props = {
		aspect: number;
		asset: NonNullable<MediaProjection['asset']>;
	};
	let { aspect, asset }: Props = $props();
</script>

<div
	style:--image-aspect={aspect}
<<<<<<< HEAD
	class="bg-black px-[10%] not-window-landscape:px-[15%] window-landscape-tight:px-[15%] window-landscape-ultratight:px-[10%]"
>
	<div
		class="scrollweb-wrapper @container not-window-landscape:hidden window-landscape-ultratight:hidden"
=======
	class="not-window-landscape:px-[15%] window-landscape-tight:px-[15%] window-landscape-ultratight:px-[10%] bg-black px-[10%]"
>
	<div
		class="scrollweb-wrapper not-window-landscape:hidden window-landscape-ultratight:hidden @container"
>>>>>>> main
	>
		<div class="h-(--scroll-distance)">
			<div class="sticky top-0 grid h-(--total-height) place-items-center">
				<div class="overflow-hidden rounded-sm">
					<BrowserFrame />

					<div class="grid aspect-(--frame-aspect) overflow-hidden">
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

	<!-- Non-scrolling version -->
	<div
<<<<<<< HEAD
		class="py-[20%] window-landscape:hidden window-landscape-ultratight:block"
=======
		class="window-landscape:hidden window-landscape-ultratight:block py-[20%]"
>>>>>>> main
	>
		<div class="overflow-hidden rounded-sm">
			<BrowserFrame />
			<Media value={asset} sizes="100vw" alt={null} />
		</div>
	</div>
</div>

<!-- prettier-ignore -->
<style>
	@keyframes scroll-image {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(var(--scroll-offset));
		}
	}

	.scrollweb-wrapper {
		/* Settings */
		--total-height: 100lvh /* height of client browser */;
		--frame-aspect: calc(16 / 9) /* aspect ratio of the browser frame */;

		view-timeline-name: --scroll-timeline;

		--calc-browser-frame-height: calc(100cqi / var(--frame-aspect)); /* { width of contained wrapper } / { aspect ratio of the browser frame } = { height of the browser frame } */
		--calc-y-negative-space: calc(var(--total-height) - var(--calc-browser-frame-height)); /* Y Negative Space: { height of the contained wrapper } - { height of the browser frame } = { negative space left over } */	
		--scroll-distance: calc((100cqi / var(--image-aspect)) + var(--calc-y-negative-space)); /* Scroll Distance: { width of the image } + { y negative space } */
	}

	.scrollweb-wrapper :global(img) {
		--scroll-offset: calc(-100% + var(--calc-browser-frame-height));

		animation: scroll-image linear forwards;
		animation-timeline: --scroll-timeline;
		animation-range: contain;
	}
</style>
