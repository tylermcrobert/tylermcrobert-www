<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	import Image, { type ImageProps } from '$components/Image.svelte';
	import type { VideoProps } from '$components/Video/types';
	import VideoFromProjection from '$components/Video/VideoFromProjection.svelte';
	import type { MediaProjectionAsset } from '$sanity';

	type Props = {
		value: MediaProjectionAsset;
		sizes: string;
		alt: string | null;
		class?: ClassValue;
		imageProps?: Partial<ImageProps>;
		videoProps?: Partial<VideoProps>;
	};

	let {
		value,
		alt,
		class: className = 'w-full',
		sizes,
		imageProps,
		videoProps
	}: Props = $props();
</script>

{#if value?._type === 'video'}
	<VideoFromProjection
		{...videoProps}
		projection={value.video}
		class={className}
	/>
{:else if value?._type === 'image'}
	<Image {...imageProps} image={value.image} class={className} {alt} {sizes} />
{/if}
