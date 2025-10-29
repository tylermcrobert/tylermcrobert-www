<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	import { Image, type ImageProps, Video, type VideoProps } from '$components';
	import type { MediaProjectionAsset } from '$sanity';

	import { formatVideoProps } from './formatVideoProps';

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
	<Video {...formatVideoProps(value.video, videoProps)} class={className} />
{:else if value?._type === 'image'}
	<Image {...imageProps} image={value.image} class={className} {alt} {sizes} />
{/if}
