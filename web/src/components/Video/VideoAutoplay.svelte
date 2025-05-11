<script lang="ts">
	import { onMount } from 'svelte';
	import type { ClassValue } from 'svelte/elements';
	import type { MediaProjectionVideo } from '$sanity';
	import { getAspect } from '$lib/util';
	import { intersect } from '$lib/actions';

	type Props = {
		class: ClassValue | undefined;
	} & Pick<MediaProjectionVideo, 'playbackId' | 'aspect'>;

	let { class: className, ...video }: Props = $props();

	let videoElement = $state<HTMLVideoElement>();
	let intersecting = $state(false);
	let packageLoaded = $state(false);

	onMount(() => {
		import('@mux/mux-video').then(() => {
			packageLoaded = true;
		});
	});

	$effect(() => {
		if (!packageLoaded) {
			return;
		}

		if (!intersecting) {
			videoElement?.pause();
		} else {
			videoElement?.play();
		}
	});
</script>

<mux-video
	style:aspect-ratio={getAspect(video.aspect)}
	bind:this={videoElement}
	class={['block w-full', className]}
	metadata-viewer-user-id="s4u780"
	playback-id={video?.playbackId}
	muted
	loop
	playsinline
	style:--media-object-fit="cover"
	style:transform="scale(1.001)"
	use:intersect={(e) => (intersecting = e.isIntersecting)}
>
</mux-video>
