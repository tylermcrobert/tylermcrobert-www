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
	import { stegaClean } from '@sanity/sveltekit';
	import Image, {
		type SanityImageSource,
		type SvelteSanityImageProps
	} from '@tylermcrobert/svelte-sanity-image';
	import { getContext } from 'svelte';

	import { metadata } from '$lib/state';
	import { client } from '$sanity';

	let { alt, priority: priorityProp, image, ...props }: ImageProps = $props();

	let priority = $derived(priorityProp || getContext('imagePriorityContext'));
</script>

<Image
	{...props}
	{client}
	{image}
	alt={stegaClean(alt) || stegaClean(metadata.title) || null}
	autoFormat
	loading={priority ? 'eager' : 'lazy'}
	fetchpriority={priority ? 'high' : undefined}
/>
