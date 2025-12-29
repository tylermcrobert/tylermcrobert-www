<script lang="ts">
	import BrowserFrame from './BrowserFrame.svelte';
	import type { MediaProjection } from '$sanity';
	import Media from './Media.svelte';

	type Props = {
		aspect: number;
		asset: NonNullable<MediaProjection['asset']>;
	};
	let { aspect, asset }: Props = $props();
</script>

<div
	style:--image-aspect={aspect}
	style:--frame-aspect={16 / 9}
	class="scrollweb-wrapper bg-black px-[10%]"
>
	<div class="@container">
		<div class="h-(--scroll-distance)">
			<div class="sticky top-0 grid h-lvh place-items-center">
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
</div>

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
		view-timeline-name: --scroll-timeline;

		/* Browser frame height: { width of wrapper } / { aspect ratio of the browser frame } */
		--calc-browser-frame-height: calc(100cqi / var(--frame-aspect));
		/* Y Negative Space: { height of the wrapper } - { height of the browser frame } */
		--calc-y-negative-space: calc(100lvh - var(--calc-browser-frame-height));
		/* Final Value */
		--scroll-distance: calc(
			(100cqi / var(--image-aspect)) + var(--calc-y-negative-space)
		);
	}

	.scrollweb-wrapper :global(img) {
		--scroll-offset: calc(-100% + var(--calc-browser-frame-height));
		animation: scroll-image linear forwards;
		animation-timeline: --scroll-timeline;
		animation-range: contain;
	}
</style>
