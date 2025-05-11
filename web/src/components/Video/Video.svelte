<script lang="ts">
	import type { MediaProjectionVideo } from '$sanity';
	import type { ClassValue } from 'svelte/elements';
	import VideoAutoplay from './VideoAutoplay.svelte';
	import VideoWithControls from './VideoWithControls.svelte';

	type Props = {
		class?: ClassValue;
	} & MediaProjectionVideo;

	let { class: className, showControls, ...video }: Props = $props();
</script>

{#if showControls}
	<VideoWithControls {...video} class={className} />
{:else}
	<VideoAutoplay {...video} class={className} />
{/if}
