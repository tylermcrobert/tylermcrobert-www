<script lang="ts">
	import ModuleDynamicImage from './ModuleDynamicImage.svelte';
	import ModuleWebsite from './ModuleWebsite.svelte';
	import type { PortfolioModule } from '$lib/sanity/queries';

	export let modules: PortfolioModule[];
</script>

{#each modules as module}
	{#if module._type === 'website'}
		<ModuleWebsite data={module} />
	{:else if module._type === 'dynamicImage'}
		<ModuleDynamicImage data={module} />
	{/if}
{/each}
