<script lang="ts">
	import { createContext } from 'svelte';
	import BrowserFrame from '$components/BrowserFrame.svelte';
	import Image from '$components/Image.svelte';
	import Media from '$components/Media.svelte';
	import type { ModuleWebsite } from '$sanity';
	import { colorToString } from '$util/colorToRgba';
	import { setContext } from 'svelte';
	import ScrollingBrowserJSWorking2 from '$components/ScrollingBrowserJSWorking2.svelte';
	import { getImageDimensions } from '@tylermcrobert/svelte-sanity-image';

	type Props = { data: ModuleWebsite };

	let { data }: Props = $props();
	let { showFrame, backgroundImg, media } = $derived(data);
</script>

<div class="-mx-standard">
	{#if media?.asset && media?.asset?._type === 'image'}
		{@const { width, height } = getImageDimensions(media?.asset.image)}

		<ScrollingBrowserJSWorking2
			{height}
			aspect={width / height}
			asset={media?.asset}
		/>
	{/if}
</div>
