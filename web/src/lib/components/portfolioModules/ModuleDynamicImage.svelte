<script lang="ts">
  import { page } from '$app/stores';
  import ResponsiveImage from '../ResponsiveImage.svelte';
  import type { ModuleDynamicImage } from '$lib/sanity/queries';

  export let data: ModuleDynamicImage;

  $: half = data.span === 'half';
</script>

<div class:md:col-span-3={half} class:md:col-span-6={!half} class="col-span-6">
  {#if data.image?.asset}
    <ResponsiveImage
      image={data.image}
      alt={$page.data.title}
      aspect={(data.aspect && 1 / data.aspect) || undefined}
      className="w-full"
      sizes={half ? '50vw' : '100vw'}
    />
  {/if}
</div>
