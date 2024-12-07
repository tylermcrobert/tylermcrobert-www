<script lang="ts">
	import { page } from '$app/stores';
	import { client } from '$sanity';
	import { getTitle } from './Metadata.svelte';
	import Image, {
		type SanityImageSource,
		type SvelteSanityImageProps
	} from '@tylermcrobert/svelte-sanity-image';

	const title = $derived(getTitle($page));

	type Props = Omit<SvelteSanityImageProps, 'client' | 'alt' | 'image'> & {
		image: SanityImageSource;
		alt: string | null;
		priority?: boolean;
	};

	let { alt, priority, image, ...props }: Props = $props();
</script>

<Image
	{...props}
	{client}
	{image}
	alt={alt || title || null}
	autoFormat
	loading={priority ? 'eager' : 'lazy'}
	fetchpriority={priority ? 'high' : undefined}
/>
