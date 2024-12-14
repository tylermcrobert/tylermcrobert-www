<script lang="ts">
	import SvelteIntersectionObserver from 'svelte-intersection-observer';
	import type { MediaProjectionVideo } from '$sanity';
	import VideoWrapper from './VideoWrapper.svelte';

	type Props = {
		video: MediaProjectionVideo;
		class: string | undefined;
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
			metadata-viewer-user-id="s4u780"
			playback-id={video?.id}
			class="absolute -inset-px"
			muted
			loop
			playsinline
			style:--media-object-fit="cover"
		>
		</mux-video>
	{/await}
</VideoWrapper>

<SvelteIntersectionObserver element={videoElement} bind:intersecting />
