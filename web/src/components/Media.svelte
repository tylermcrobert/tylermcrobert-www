<script lang="ts">
	import {
		getAspectNumber,
		muxToVideoProps
	} from 'sanity-plugin-video-player/client';
	import type { ClassValue } from 'svelte/elements';

	import Image, { type ImageProps } from '$components/Image.svelte';
	import type { MediaProjection } from '$sanity';

	import type { VideoProps } from './Video/types';
	import Video from './Video/Video.svelte';

	type Props = {
		value: MediaProjection;
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

{#if value?.video?.playbackId}
	{@const parsed = muxToVideoProps(value.video)}
	{@const aspect = getAspectNumber(value.video.aspect ?? '16:9')}
	{@const hasSound = value.video.hasSound ?? true}

	<Video {...videoProps} {...parsed} {aspect} class={className} {hasSound} />
{:else if value?.image}
	<Image {...imageProps} image={value.image} class={className} {alt} {sizes} />
{/if}
