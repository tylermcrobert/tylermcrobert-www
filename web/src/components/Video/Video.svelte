<script lang="ts">
	import VideoWithControls from './VideoWithControls.svelte';
	import VideoWithoutControls from './VideoWithoutControls.svelte';
	import type { VideoProps } from '$lib/video';

	let { ...props }: VideoProps = $props();
</script>

{#if props.controls === true}
	<VideoWithControls {...props} />
{:else}
	<VideoWithoutControls {...props} />
{/if}
