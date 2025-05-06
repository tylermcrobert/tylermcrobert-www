<script lang="ts">
	import SvelteIntersectionObserver from 'svelte-intersection-observer';
	import type { MediaProjectionVideo } from '$sanity';
	import VideoWrapper from './VideoWrapper.svelte';
	import type { ClassValue } from 'svelte/elements';

	type Props = {
		video: MediaProjectionVideo;
		class: ClassValue | undefined;
	};

	let { class: className, video }: Props = $props();

	let videoElement = $state<HTMLVideoElement>();
	let intersecting = $state(false);

	$effect(() => {
		if (!intersecting) {
			videoElement?.pause();
		} else {
			videoElement?.play();
		}
	});
</script>

<VideoWrapper {video} class={className}>
	{#await import('@mux/mux-video') then}
		<mux-video
			bind:this={videoElement}
			class="w-full"
			metadata-viewer-user-id="s4u780"
			playback-id={video?.id}
			muted
			loop
			playsinline
			style:--media-object-fit="cover"
			style:transform="scale(1.001)"
		>
		</mux-video>
	{/await}
</VideoWrapper>

<SvelteIntersectionObserver element={videoElement} bind:intersecting />
