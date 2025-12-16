<script lang="ts">
	import { intersectionHandlePlayback } from './attachments/onScrollHandlePlayback.svelte';
	import { intersectionLoadMux } from './attachments/onScrollLoadMux.svelte';
	import type { VideoProps } from './types';
	import VideoControls from './VideoControls.svelte';

	let {
		class: className,
		playbackId,
		autoplay,
		controls,
		poster,
		aspect,
		lazyLoadMuxVideoPackage = true,
		...props
	}: VideoProps = $props();

	let isMuxLoaded = $derived(
		lazyLoadMuxVideoPackage ? false : !!(await import('@mux/mux-video'))
	);
</script>

{#snippet video()}
	{@const shouldShowPoster = poster && !controls}
	{@const posterStyle = `url('${poster}') center / cover`}

	<mux-video
		{...props}
		playback-id={playbackId}
		class={['block w-full', !controls && className]}
		style:--media-object-fit="cover"
		style:background={shouldShowPoster ? posterStyle : undefined}
		style:aspect-ratio={controls ? undefined : aspect}
		disablepictureinpicture
		playsinline
		slot="media"
		{@attach isMuxLoaded
			? intersectionHandlePlayback({ autoPlay: !!autoplay, autoPause: true })
			: intersectionLoadMux(() => (isMuxLoaded = true))}
	>
	</mux-video>
{/snippet}

{#if controls}
	<VideoControls {aspect} class={className} {poster}>
		{@render video()}
	</VideoControls>
{:else}
	{@render video()}
{/if}
