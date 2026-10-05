<script lang="ts">
	import { lazyLoad } from './attachments/lazyLoad.svelte';
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
	{let isLoaded = $state(false)}

	<svelte:element
		this={isMux ? 'mux-video' : 'video'}
		{...props}
		src={isMux ? src : undefined}
		class={['block w-full object-cover', !controls && className]}
		style:background={poster ? `url("${poster}") center / cover` : undefined}
		style:aspect-ratio={aspect}
		style:--media-object-fit="cover"
		playsinline
		crossorigin="anonymous"
		{@attach !isLoaded
			? lazyLoad({ src: src!, isMux, eager, onload: () => (isLoaded = true) })
			: intersectionHandlePlayback({
					autoPlay: !!autoplay,
					autoPause: true
				})}
	></svelte:element>
{/snippet}

{#if controls}
	<VideoControls class={className}>
		{@render video()}
	</VideoControls>
{:else}
	{@render video()}
{/if}
