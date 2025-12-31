<script lang="ts">
	import Image from '$components/Image.svelte';
	import Media from '$components/Media.svelte';
	import type { ModuleWebsite } from '$sanity';

	import BrowserChrome from './BrowserChrome.svelte';
	import ScrollingBrowser from './ScrollingBrowser.svelte';

	type Props = { data: ModuleWebsite };

	let { data }: Props = $props();
	let { showFrame, backgroundImg, media, scrolling } = $derived(data);
</script>

<div
	style:background={data.backgroundColor || 'var(--section-background)'}
	class="relative my-standard flow-root w-full bg-black px-[10%] tight-client-window:px-[15%]"
>
	{#if !scrolling}
		{@render standard()}
	{:else}
		<div class="z-10 not-scrolling-browser-aspect-range:hidden">
			<ScrollingBrowser {data} {content} {browserChrome} />
		</div>
		<div class="scrolling-browser-aspect-range:hidden">
			{@render standard()}
		</div>
	{/if}
</div>

{#snippet standard()}
	<div
		class={[
			'relative z-10 my-[10%] tight-client-window:my-[15%]',
			showFrame !== false && 'round-browser-frame'
		]}
	>
		{@render browserChrome()}
		{@render content()}
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
{/snippet}

{#snippet content()}
	{#if media?.asset}
		<div class="block bg-white">
			<Media sizes="80vw" value={media.asset} alt={null} />
		</div>
	{/if}
{/snippet}

{#snippet browserChrome()}
	{#if showFrame !== false}
		<BrowserChrome />
	{/if}
{/snippet}
