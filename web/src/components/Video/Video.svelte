<script lang="ts">
	import { loadMux } from './attachments/loadMux.svelte';
	import { intersectionHandlePlayback } from './attachments/onScrollHandlePlayback.svelte';
	import type { VideoProps } from './types';
	import VideoControls from './VideoControls.svelte';

	let {
		class: className,
		autoplay,
		controls,
		poster,
		aspect,
		eager = false,
		src,
		...props
	}: VideoProps = $props();

	const isMux = $derived(
		!!src && /^https:\/\/stream\.mux\.com\/[^/?#]+\.m3u8(?:$|[?#])/.test(src)
	);
</script>

{#snippet video()}
	{let isMuxLoaded = $state(false)}

	<svelte:element
		this={isMux ? 'mux-video' : 'video'}
		{...props}
		{src}
		class={['block w-full object-cover', !controls && className]}
		style:background={poster ? `url("${poster}") center / cover` : undefined}
		style:aspect-ratio={aspect}
		style:--media-object-fit="cover"
		playsinline
		{@attach isMux && !isMuxLoaded
			? loadMux({ eager, onmuxload: () => (isMuxLoaded = true) })
			: intersectionHandlePlayback({ autoPlay: !!autoplay, autoPause: true })}
	></svelte:element>
{/snippet}

{#if controls}
	<VideoControls class={className}>
		{@render video()}
	</VideoControls>
{:else}
	{@render video()}
{/if}
