<script lang="ts">
  import ModuleDynamicImage from './PortfolioModules/ModuleDynamicImage.svelte';
  import ModuleWebsite from './PortfolioModules//ModuleWebsite.svelte';
  import type { PortfolioModule } from '$lib/sanity/queries';
  import ModuleTextBlock from './PortfolioModules/ModuleTextBlock.svelte';
  import ModuleMobileWebsite from './PortfolioModules/ModuleMobileWebsite.svelte';
  import ModuleTimedSlides from './PortfolioModules/ModuleTimedSlides.svelte';
  import ModuleTripleImage from './PortfolioModules/ModuleTripleImage.svelte';
  import ModuleEmptySpace from './PortfolioModules/ModuleEmptySpace.svelte';

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
