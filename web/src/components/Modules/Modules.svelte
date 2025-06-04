<script lang="ts">
	import type { Module } from '$sanity';
	import TextBlock from './ModuleTextBlock.svelte';
	import MediaBlock from './ModuleMediaBlock.svelte';
	import { createDataAttribute } from '@sanity/sveltekit';

	type Props = {
		modules: Module[];
		documentId: string;
		documentType: string;
	};

	let { modules, documentId, documentType }: Props = $props();

	const attr = $derived(
		createDataAttribute({
			id: documentId,
			type: documentType,
			path: 'modules'
		})
	);
</script>

<div data-sanity={attr()}>
	{#each modules as data}
		<section
			data-type={data._type}
			data-sanity={attr(`[_key=="${data._key}"]`)}
		>
			{#if data._type === 'textBlock'}
				<TextBlock {data} />
			{:else if data._type === 'mediaBlock'}
				<MediaBlock {data} />
			{:else}
				{console.warn('Cannot find module:', data._type)}
			{/if}
		</section>
	{/each}
</div>
