<script module lang="ts">
	export type ImageProps = Omit<
		SvelteSanityImageProps,
		'client' | 'alt' | 'image'
	> & {
		image: SanityImageSource;
		alt: string | null;
		priority?: boolean;
	};
</script>

<script lang="ts">
	import { client } from '$sanity';
	import { getContext } from 'svelte';
	import { stegaClean } from '@sanity/client/stega';
	import Image, {
		type SanityImageSource,
		type SvelteSanityImageProps
	} from '@tylermcrobert/svelte-sanity-image';
	import { metadata } from '$lib/state';

	let { alt, priority: priorityProp, image, ...props }: ImageProps = $props();

	let priority = $derived(priorityProp || getContext('imagePriorityContext'));
</script>

<Image
	{...props}
	{client}
	{image}
	alt={alt || stegaClean(metadata.title) || null}
	autoFormat
	loading={priority ? 'eager' : 'lazy'}
	fetchpriority={priority ? 'high' : undefined}
/>
