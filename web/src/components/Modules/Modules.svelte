<script lang="ts">
	import type { Module } from '$sanity';
	import TextBlock from './ModuleTextBlock.svelte';
	import MediaBlock from './ModuleMediaBlock.svelte';
	import ModuleWebsite from './ModuleWebsite.svelte';
	import ModuleDiptych from './ModuleDiptych.svelte';
	import ModuleTripleImage from './ModuleTripleImage.svelte';
	import ModuleMobileWebsite from '$components/ModuleMobileWebsite.svelte';
	import { ImagePriorityProvider } from '$components';
	import ModuleTimedSlides from './ModuleTimedSlides.svelte';
	import ModulePlaylistBlock from './ModulePlaylistBlock.svelte';

	type Props = { modules: Module[] };

	let { modules }: Props = $props();
</script>

<div class="wrapper mx-auto">
	{#each modules as data, i}
		<ImagePriorityProvider priority={i <= 1}>
			<section data-name={data._type}>
				{#if data._type === 'textBlock'}
					<TextBlock {data} />
				{:else if data._type === 'mediaBlock'}
					<MediaBlock {data} />
				{:else if data._type === 'website'}
					<ModuleWebsite {data} />
				{:else if data._type === 'diptych'}
					<ModuleDiptych {data} />
				{:else if data._type === 'tripleImage'}
					<ModuleTripleImage {data} />
				{:else if data._type === 'mobileWebsite'}
					<ModuleMobileWebsite {data} />
				{:else if data._type === 'timedSlides'}
					<ModuleTimedSlides {data} />
				{:else if data._type === 'playlistBlock'}
					<ModulePlaylistBlock {data} />
				{:else}
					{console.warn('Cannot find module:', data._type)}
				{/if}
			</section>
		</ImagePriorityProvider>
	{/each}
</div>
