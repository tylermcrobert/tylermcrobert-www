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
		hasSound = true,
		...props
	}: VideoProps = $props();

	let isMuxLoaded = $state(false);
</script>

{#snippet video()}
	<mux-video
		{...props}
		class={['block w-full', !controls && className]}
		style:background={poster ? `url("${poster}") center / cover` : undefined}
		style:--media-object-fit="cover"
		style:aspect-ratio={aspect}
		crossorigin="anonymous"
		playsinline
		{@attach !isMuxLoaded
			? loadMux({ eager, onmuxload: () => (isMuxLoaded = true) })
			: intersectionHandlePlayback({ autoPlay: !!autoplay, autoPause: true })}
	>
	</mux-video>
{/snippet}

{#if controls}
	<VideoControls class={className} {hasSound}>
		{@render video()}
	</VideoControls>
{:else}
	{@render video()}
{/if}
