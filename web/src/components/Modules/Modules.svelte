<script lang="ts">
	import type { Module } from '$sanity';
	import TextBlock from './ModuleTextBlock.svelte';
	import MediaBlock from './ModuleMediaBlock.svelte';

	type Props = { modules: Module[] };

	let { modules }: Props = $props();
</script>

{#each modules as data}
	<section>
		{#if data._type === 'textBlock'}
			<TextBlock {data} />
		{:else if data._type === 'mediaBlock'}
			<MediaBlock {data} />
		{:else}
			{console.warn('Cannot find module:', data._type)}
		{/if}
	</section>
{/each}
