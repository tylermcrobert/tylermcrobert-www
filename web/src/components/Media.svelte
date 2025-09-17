<script lang="ts">
	import type { MediaProjectionAsset } from '$sanity';
	import { formatVideoProjection, type VideoProps } from '$lib/video';
	import { Video, Image } from '$components';
	import type { ClassValue } from 'svelte/elements';
	import type { ImageProps } from './Image.svelte';

	type Props = {
		value: MediaProjectionAsset;
		sizes: string;
		class?: ClassValue;
		priority?: boolean;
		alt: string | null;
		imageProps?: Partial<ImageProps>;
		videoProps?: Partial<VideoProps>;
	};

	let {
		value,
		alt,
		class: className = 'w-full',
		sizes,
		priority,
		imageProps,
		videoProps
	}: Props = $props();
</script>

{#if value?._type === 'video'}
	<Video
		{...formatVideoProjection(value.video)}
		{...videoProps}
		class={className}
	/>
{:else if value?._type === 'image'}
	<Image
		{...imageProps}
		image={value.image}
		class={className}
		{alt}
		{sizes}
		{priority}
	/>
{/if}
