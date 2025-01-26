<script lang="ts">
	import type { MediaProjection } from '$sanity';
	import { Video, Image } from '$components';

	type Props = {
		data: MediaProjection;
		sizes: string;
		class?: string;
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

{#if data?.video}
	<Video video={data.video} class={className} />
{:else if data?.image}
	<Image
		image={data.image}
		{alt}
		class={className}
		{sizes}
		{priority}
		aspect={imageAspect}
	/>
{/if}
