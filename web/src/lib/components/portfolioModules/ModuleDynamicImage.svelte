<script lang="ts">
  import { page } from '$app/stores';
  import ResponsiveImage from '../ResponsiveImage.svelte';
  import type { ModuleDynamicImage } from '$lib/sanity/queries';

  export let data: ModuleDynamicImage;

  $: half = data.span === 'half';
  $: full = !half;
</script>

<div class:half class:full>
  {#if data.image?.asset}
    <ResponsiveImage
      image={data.image}
      alt={$page.data.title}
      aspect={(data.aspect && 1 / data.aspect) || undefined}
      sizes={half ? '50vw' : '100vw'}
    />
  {/if}
</div>
