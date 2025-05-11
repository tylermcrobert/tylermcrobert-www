<script lang="ts">
	import type { MediaProjectionAsset, MediaProjectionVideo } from '$sanity';
	import { Video, Image } from '$components';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		value: MediaProjectionAsset;
		sizes: string;
		class?: ClassValue;
		priority?: boolean;
		alt: string | null;
		imageProps?: Partial<{ aspect: number }>;
		videoProps?: Partial<MediaProjectionVideo>;
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
	<Video {...value.video} {...videoProps} class={className} />
{:else if value?._type === 'image'}
	<Image
		image={value.image}
		class={className}
		{alt}
		{sizes}
		{priority}
		{...imageProps}
	/>
{/if}
