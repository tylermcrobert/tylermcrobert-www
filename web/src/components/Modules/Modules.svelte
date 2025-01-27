<script lang="ts">
	import type { Module } from '$sanity';
	import TextBlock from './ModuleTextBlock.svelte';
	import MediaBlock from './ModuleMediaBlock.svelte';
	import ModuleWebsite from './ModuleWebsite.svelte';

	type Props = { modules: Module[] };

	let { modules }: Props = $props();
</script>

<div class="wrapper mx-auto">
	{#each modules as data}
		<section data-name={data._type}>
			{#if data._type === 'textBlock'}
				<TextBlock {data} />
			{:else if data._type === 'mediaBlock'}
				<MediaBlock {data} />
			{:else if data._type === 'website'}
				<ModuleWebsite {data} />
			{:else}
				{console.warn('Cannot find module:', data._type)}
			{/if}
		</section>
	{/each}
</div>
