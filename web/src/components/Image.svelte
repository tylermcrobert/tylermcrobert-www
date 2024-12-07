<script lang="ts">
	import { page } from '$app/stores';
	import { getTitle } from './Metadata.svelte';
	import { client, type SanityImageAsset } from '$sanity';
	import Image, {
		type SanityImageObject,
		type SvelteSanityImageProps
	} from '@tylermcrobert/svelte-sanity-image';

	const title = $derived(getTitle($page));

	type Props = Omit<
		SvelteSanityImageProps,
		'client' | 'alt' | 'image' | 'hidden' | 'children'
	> & {
		image: SanityImageAsset;
		alt: string | null;
		priority?: boolean;
	};

	let { alt, priority, image, ...props }: Props = $props();
</script>

<Image
	{...props}
	{client}
	image={image as unknown as SanityImageObject}
	alt={alt || title || null}
	autoFormat
	loading={priority ? 'eager' : 'lazy'}
	fetchpriority={priority ? 'high' : undefined}
/>
