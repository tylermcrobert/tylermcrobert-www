<script lang="ts">
	import BrowserFrame from '$components/BrowserFrame.svelte';
	import Image from '$components/Image.svelte';
	import Media from '$components/Media.svelte';
	import type { ModuleWebsite } from '$sanity';
	import { colorToString } from '$util/colorToRgba';

	type Props = { data: ModuleWebsite };

	let { data }: Props = $props();
	let { theme, showFrame, backgroundImg, media } = $derived(data);
</script>

<div
	style:background={data.backgroundColor ||
		colorToString(theme?.sectionBackground)}
	class="relative my-standard w-full bg-black p-[10%]"
>
	<div class="relative z-10">
		{#if showFrame !== false}
			<BrowserFrame
				dots={colorToString(theme?.dots) || null}
				frameBackground={colorToString(theme?.frameBackground) || '#282828'}
				frameForeground={colorToString(theme?.frameForeground) || '#ffffff50'}
				style={theme?.style || 'simple'}
			/>
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
