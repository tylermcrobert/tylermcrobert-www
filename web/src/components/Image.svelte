<script lang="ts">
	import { metadata } from '$lib/state';
	import { client } from '$sanity';
	import Image, {
		type SanityImageSource,
		type SvelteSanityImageProps
	} from '@tylermcrobert/svelte-sanity-image';

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
	alt={alt || metadata.title || null}
	autoFormat
	loading={priority ? 'eager' : 'lazy'}
	fetchpriority={priority ? 'high' : undefined}
/>
