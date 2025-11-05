<script lang="ts">
	import { handleVideoPlayback } from './attachments/handleVideoPlayback.svelte';
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

	if (!lazyLoadMuxVideoPackage) {
		import('@mux/mux-video');
	}
</script>

{#snippet video()}
	{@const aspectProp = !controls ? aspect : undefined}
	{@const isPoster = !!poster && !controls}
	{@const posterBg = isPoster ? `url('${poster}') center / cover` : undefined}
	{@const classNameIfNoControls = !controls ? undefined : className}

	<mux-video
		{...props}
		playback-id={playbackId}
		class={['block w-full', classNameIfNoControls]}
		disablepictureinpicture
		playsinline
		style:background={posterBg}
		style:aspect-ratio={aspectProp}
		style:--media-object-fit="cover"
		slot="media"
		{@attach handleVideoPlayback({
			autoPlay: !!autoplay,
			autoPause: true
		})}
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
