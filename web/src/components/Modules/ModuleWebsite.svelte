<script lang="ts">
	import Image from '$components/Image.svelte';
	import Media from '$components/Media.svelte';
	import ScrollingBrowser from '$components/ScrollingBrowser.svelte';
	import type { ModuleWebsite } from '$sanity';

	import BrowserFrame from './Browser/BrowserFrame.svelte';

	type Props = { data: ModuleWebsite };

	let { data }: Props = $props();
	let { showFrame, backgroundImg, media } = $derived(data);

	const IS_SCROLLING = true;
</script>

<div
	style:background={data.backgroundColor || 'var(--browser-section-background)'}
	class="relative my-standard w-full bg-black p-[10%]"
>
	{#if IS_SCROLLING}
		<div class="relative z-10 not-[@media(1/1<=aspect-ratio<=1.75)]:hidden">
			<ScrollingBrowser {data} />
		</div>
		<div class="[@media(1/1<=aspect-ratio<=1.75)]:hidden">
			{@render standard()}
		</div>
	{:else}
		{@render standard()}
	{/if}
</div>

{#snippet standard()}
	<div
		class={[
			'relative z-10',
			showFrame !== false && 'overflow-hidden rounded-xs md:rounded-sm'
		]}
	>
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
{/snippet}
