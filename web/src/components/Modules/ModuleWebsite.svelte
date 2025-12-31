<script lang="ts">
	import Image from '$components/Image.svelte';
	import Media from '$components/Media.svelte';
	import type { ModuleWebsite } from '$sanity';

	import BrowserFrame from './Browser/BrowserFrame.svelte';
	import ScrollingBrowser from './Browser/ScrollingBrowser.svelte';

	type Props = { data: ModuleWebsite };

	let { data }: Props = $props();
	let { showFrame, backgroundImg, media } = $derived(data);

	const IS_SCROLLING = true;
</script>

<div
	style:background={data.backgroundColor || 'var(--browser-section-background)'}
	class="relative my-standard w-full bg-black p-[10%]"
>
	{#if !IS_SCROLLING}
		{@render standard()}
	{:else}
		<div class="z-10 not-[@media(1/1<=aspect-ratio<=1.75)]:hidden">
			<ScrollingBrowser {data} {content} {browserChrome} />
		</div>
		<div class="[@media(1/1<=aspect-ratio<=1.75)]:hidden">
			{@render standard()}
		</div>
	{/if}
</div>

{#snippet standard()}
	<div
		class={[
			'relative z-10',
			showFrame !== false && 'overflow-hidden rounded-xs md:rounded-sm'
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
		<BrowserFrame />
	{/if}
{/snippet}
