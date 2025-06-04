<script lang="ts">
	import { client } from '$sanity';
	import { getContext } from 'svelte';
	import { stegaClean } from '@sanity/client/stega';
	import Image, {
		type SanityImageSource,
		type SvelteSanityImageProps
	} from '@tylermcrobert/svelte-sanity-image';
	import { metadata } from '$lib/state';

	type Props = Omit<SvelteSanityImageProps, 'client' | 'alt' | 'image'> & {
		image: SanityImageSource;
		alt: string | null;
		priority?: boolean;
	};

	let { alt, priority: priorityProp, image, ...props }: Props = $props();

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
