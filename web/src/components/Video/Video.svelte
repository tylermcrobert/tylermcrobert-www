<script lang="ts">
	import { onMount } from 'svelte';

	import { playOnIntersect } from '$lib/attachments';

	import type { VideoProps } from './types';
	import VideoControls from './VideoControls.svelte';

	let {
		class: className,
		playbackId,
		autoplay,
		controls,
		poster,
		...props
	}: VideoProps = $props();

	let muxVideoPkgLoaded = $state(false);

	onMount(() => {
		import('@mux/mux-video').then(() => {
			muxVideoPkgLoaded = true;
		});
	});
</script>

{#snippet video()}
	<mux-video
		{...props}
		playback-id={playbackId}
		style:background={poster && !controls // use background in VideoControls
			? `url('${poster}') center / cover`
			: undefined}
		class={['block w-full', controls ? className : '']}
		style:aspect-ratio={controls ? undefined : props.aspect}
		style:--media-object-fit="cover"
		slot="media"
		disablepictureinpicture
		playsinline
		{@attach playOnIntersect({
			ready: muxVideoPkgLoaded,
			autoPlay: !!autoplay,
			autoPause: true
		})}
	>
	</mux-video>
{/snippet}

{#if controls}
	<VideoControls aspect={props.aspect} class={className} {poster}>
		{@render video()}
	</VideoControls>
{:else}
	{@render video()}
{/if}
