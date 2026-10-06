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

<div class={!scrolling ? 'wrapper' : 'not-scrolling-browser-fits:wrapper'}>
	<div
		style:--padding="10%"
		style:background={data.backgroundColor || 'var(--section-background)'}
		class="relative my-standard flow-root w-full bg-black"
	>
		{#if !scrolling}
			{@render nonScrollingUI()}
		{:else}
			{@render scrollUI()}
		{/if}
	</div>
</div>

{#snippet browserWithFrame()}
	<div
		class={[
			'relative z-10 m-(--padding)',
			showFrame !== false && 'round-browser-frame'
		]}
	>
		{@render browserChrome()}
		{@render mediaContents()}
	</div>
{/snippet}

{#snippet mediaContents()}
	{#if media}
		<div class="block bg-white">
			<Media sizes="80vw" value={media} alt={null} />
		</div>
	{/if}
{/snippet}

{#snippet browserChrome()}
	{#if showFrame !== false}
		<BrowserChrome />
	{/if}
{/snippet}

{#snippet scrollUI()}
	<div class="not-scrolling-browser-fits:hidden">
		{#if backgroundImg}
			<Image
				image={backgroundImg}
				alt={null}
				sizes="90vw"
				aspect={1.5}
				class="sticky top-0 inset-0 h-dvh"
			/>
			<div class="-mb-[100vh]"></div>
		{/if}

		<div class="wrapper">
			<ScrollingBrowser {data} {mediaContents} {browserChrome} />
		</div>
	</div>

	<!-- Show regular when condition is not met -->
	<div class="scrolling-browser-fits:hidden">
		{@render browserWithFrame()}
	</div>
{/snippet}

{#snippet nonScrollingUI()}
	{@render browserWithFrame()}

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
