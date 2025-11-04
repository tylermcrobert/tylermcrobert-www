<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	import Image, { type ImageProps } from '$components/Image.svelte';
	import { type VideoProps } from '$components/Video/types';
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
	{#await import('$components/Video/Video.svelte') then { default: Video }}
		<Video {...formatVideoProps(value.video, videoProps)} class={className} />
	{/await}
{:else if value?._type === 'image'}
	<Image {...imageProps} image={value.image} class={className} {alt} {sizes} />
{/if}
