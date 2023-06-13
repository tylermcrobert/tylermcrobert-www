<script lang="ts">
	import { urlFor } from '$lib/sanity/client';
	import type { ModuleWebsite } from '$lib/sanity/queries';
	export let data: ModuleWebsite;
</script>

<div>
	{#if data.media._type === 'image'}
		<img src={urlFor(data.media.image).width(100).url()} alt="" />
	{:else if data.media._type === 'video'}
		<video src={data.media.video} muted playsinline loop autoplay />
	{/if}
</div>

<style>
	img,
	video {
		width: 100%;
		max-width: 100%;
	}
</style>
