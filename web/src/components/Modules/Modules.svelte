<script lang="ts">
	import ModuleMobileWebsite from '$components/ModuleMobileWebsite.svelte';
	import { sanityDataAttribute } from '$lib/attachments';
	import type { Module } from '$sanity';

	import ModuleContext from './ModuleContext.svelte';
	import ModuleDiptych from './ModuleDiptych.svelte';
	import MediaBlock from './ModuleMediaBlock.svelte';
	import ModulePlaylistBlock from './ModulePlaylistBlock.svelte';
	import TextBlock from './ModuleTextBlock.svelte';
	import ModuleTimedSlides from './ModuleTimedSlides.svelte';
	import ModuleTripleImage from './ModuleTripleImage.svelte';
	import ModuleWebsite from './ModuleWebsite.svelte';

	type Props = {
		modules: Module[];
		documentId: string;
		documentType: string;
	};

	let { modules, documentId, documentType }: Props = $props();
</script>

<div class="wrapper mx-auto">
	{#each modules as data, index}
		{@const path = `modules[_key=="${data._key}"]`}

		<ModuleContext {index} {documentId} {documentType} {path}>
			<section data-type={data._type} {@attach sanityDataAttribute()}>
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
		</ModuleContext>
	{/each}
</div>
