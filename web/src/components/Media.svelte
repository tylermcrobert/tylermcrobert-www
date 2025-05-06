<script lang="ts">
	import type { MediaProjection } from '$sanity';
	import { Video, Image } from '$components';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		data: MediaProjection;
		sizes: string;
		class?: ClassValue;
		priority?: boolean;
		videoElement?: HTMLVideoElement;
		imageAspect?: number | undefined;
		alt: string | null;
	};

	let {
		data,
		alt,
		class: className = 'w-full',
		sizes,
		priority,
		imageAspect
	}: Props = $props();
</script>

{#if data?.asset?._type === 'video'}
	<Video video={data.asset.video} class={className} />
{:else if data?.asset?._type === 'image'}
	<Image
		image={data.asset.image}
		{alt}
		class={className}
		{sizes}
		{priority}
		aspect={imageAspect}
	/>
{/if}
