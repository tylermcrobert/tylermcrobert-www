<script lang="ts">
	import type { MediaProjectionVideo } from '$sanity';
	import type { ClassValue } from 'svelte/elements';
	import VideoAutoplay from './VideoAutoplay.svelte';
	import VideoWithControls from './VideoWithControls.svelte';

	type Props = {
		video: MediaProjectionVideo;
		class?: ClassValue;
	};

	let { video, class: className }: Props = $props();
</script>

{#if video.showControls}
	<VideoWithControls {video} class={className} />
{:else}
	<VideoAutoplay {video} class={className} />
{/if}
