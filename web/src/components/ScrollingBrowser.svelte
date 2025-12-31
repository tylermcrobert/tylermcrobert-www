<script lang="ts">
	import { getImageDimensions } from '@tylermcrobert/svelte-sanity-image';

	import type { ModuleWebsite } from '$sanity';

	import BrowserFrame from './BrowserFrame.svelte';
	import Media from './Media.svelte';

	type Props = {
		data: ModuleWebsite;
	};

	let { data }: Props = $props();

	const aspect = $derived.by(() => {
		if (data.media?.asset?._type === 'image') {
			const { width, height } = getImageDimensions(data.media.asset.image);
			return width / height;
		}

		throw new Error('Asset is not an image');
	});
</script>

<div style:--image-aspect={aspect} class="scrollweb-wrapper @container">
	<div class="h-(--scroll-distance)">
		<div class="sticky top-0 grid h-(--total-height) place-items-center">
			<div class="overflow-hidden rounded-sm">
				{#if data.showFrame !== false}
					<BrowserFrame />
				{/if}

				<div class="grid aspect-(--frame-aspect) overflow-hidden">
					{#if data.media?.asset}
						<Media
							value={data.media.asset}
							sizes="100vw"
							alt={null}
							class="translate-y-(--image-offset)"
						/>
					{/if}
				</div>
			</div>
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
