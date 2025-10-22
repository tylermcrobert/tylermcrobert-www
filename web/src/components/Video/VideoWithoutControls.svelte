<script lang="ts">
	import { onMount } from 'svelte';
	import { playOnIntersect } from '$lib/attachments';
	import type { VideoProps } from '$lib/video';

	let {
		class: className,
		playbackId,
		autoplay,
		aspect,
		maxResolution,
		...props
	}: VideoProps = $props();

	let packageLoaded = $state(false);

	onMount(() => {
		import('@mux/mux-video').then(() => {
			packageLoaded = true;
		});
	});
</script>

<mux-video
	{...props}
	style:aspect-ratio={aspect}
	class={['block w-full', className]}
	playback-id={playbackId}
	playsinline
	disablepictureinpicture
	max-resolution={maxResolution}
	style:--media-object-fit="cover"
	{@attach playOnIntersect({
		ready: packageLoaded,
		autoPlay: !!autoplay,
		autoPause: true
	})}
>
</mux-video>
