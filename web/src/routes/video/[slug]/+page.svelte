<script lang="ts">
	import Video from '$components/Video/Video.svelte';

	let { data } = $props();
	let { playbackId, aspect, poster } = $derived(data);

	let containerHeight = $state(0);
	let containerWidth = $state(0);

	let shouldSetWidth = $derived(containerWidth / containerHeight < aspect);
</script>

<div
	class="relative h-[calc(100dvh-var(--spacing-nav-height))]"
	bind:clientHeight={containerHeight}
	bind:clientWidth={containerWidth}
>
	<div
		class="absolute inset-0 flex items-center justify-center px-standard pb-standard"
	>
		{#if containerWidth && containerHeight}
			<Video
				{playbackId}
				{aspect}
				{poster}
				autoplay={undefined}
				loop={true}
				muted={undefined}
				controls={true}
				class={shouldSetWidth ? 'w-full' : 'h-full'}
			/>
		{/if}
	</div>
</div>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<style>
	:root {
		--color-background: rgb(0, 0, 0);
		--color-foreground: rgb(255, 255, 255);
	}
</style>
