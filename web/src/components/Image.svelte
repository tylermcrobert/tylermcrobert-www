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

	import { getModuleContext } from '$lib/context/moduleContext';
	import { metadata } from '$lib/state';
	import { client } from '$sanity';

	let { alt, priority: priorityProp, image, ...props }: ImageProps = $props();

	const moduleContext = getModuleContext();
	let priority = $derived(priorityProp || moduleContext.index <= 1);
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
