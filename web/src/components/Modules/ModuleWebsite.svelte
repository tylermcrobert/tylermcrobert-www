<script lang="ts">
	import { createContext } from 'svelte';
	import BrowserFrame from '$components/BrowserFrame.svelte';
	import Image from '$components/Image.svelte';
	import Media from '$components/Media.svelte';
	import type { ModuleWebsite } from '$sanity';
	import { colorToString } from '$util/colorToRgba';
	import { setContext } from 'svelte';

	type Props = { data: ModuleWebsite };

	let { data }: Props = $props();
	let { showFrame, backgroundImg, media } = $derived(data);
</script>

<div
	style:background={data.backgroundColor || "var(--browser-section-background)"}
	class="relative my-standard w-full bg-black p-[10%]"
>
	<div class="relative z-10 md:rounded-sm overflow-hidden rounded-xs">
		{#if showFrame !== false}
			<BrowserFrame />
		{/if}

		{#if media?.asset}
			<div class="bg-white">
				<Media sizes="80vw" value={media.asset} alt={null} />
			</div>
		{/if}
	</div>

	{#if backgroundImg}
		<div>
			<Image
				image={backgroundImg}
				alt={null}
				sizes="90vw"
				aspect={1.5}
				class="absolute inset-0 z-0 h-full w-full object-cover"
			/>
		</div>
	{/if}
</div>
