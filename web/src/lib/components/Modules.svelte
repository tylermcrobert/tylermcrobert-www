<script lang="ts">
  import ModuleDynamicImage from './portfolioModules/ModuleDynamicImage.svelte';
  import ModuleWebsite from './portfolioModules//ModuleWebsite.svelte';
  import type { PortfolioModule } from '$lib/sanity/queries';
  import ModuleTextBlock from './portfolioModules/ModuleTextBlock.svelte';
  import ModuleMobileWebsite from './portfolioModules/ModuleMobileWebsite.svelte';
  import ModuleTimedSlides from './portfolioModules/ModuleTimedSlides.svelte';
  import ModuleTripleImage from './portfolioModules/ModuleTripleImage.svelte';
  import ModuleEmptySpace from './portfolioModules/ModuleEmptySpace.svelte';

  export let modules: PortfolioModule[];
</script>

{#each modules as module}
  {#if module._type === 'website'}
    <ModuleWebsite data={module} />
  {:else if module._type === 'dynamicImage'}
    <ModuleDynamicImage data={module} />
  {:else if module._type === 'tripleImage'}
    <ModuleTripleImage data={module} />
  {:else if module._type === 'textBlock'}
    <ModuleTextBlock data={module} />
  {:else if module._type === 'mobileWebsite'}
    <ModuleMobileWebsite data={module} />
  {:else if module._type === 'timedSlides'}
    <ModuleTimedSlides data={module} />
  {:else if module._type === 'emptySpace'}
    <ModuleEmptySpace />
  {/if}
{/each}
