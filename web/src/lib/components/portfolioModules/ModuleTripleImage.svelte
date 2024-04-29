<script lang="ts">
  import { page } from '$app/stores';
  import ResponsiveImage from '../ResponsiveImage.svelte';
  import type { ModuleTripleImage } from '$lib/sanity/queries';

  export let data: ModuleTripleImage;
</script>

<div class:right={data.imageRight} class:left={!data.imageRight}>
  {#if data.mainImage}
    <div>
      <ResponsiveImage
        image={data.mainImage}
        sizes="45vw"
        alt={$page.data.title}
        aspect={2 / 3}
      />
    </div>
  {/if}

  {#if data.secondaryImage1}
    <div>
      <ResponsiveImage
        image={data.secondaryImage1}
        sizes="45vw"
        alt={$page.data.title}
        aspect={3 / 2}
      />
    </div>
  {/if}

  {#if data.secondaryImage2}
    <div>
      <ResponsiveImage
        image={data.secondaryImage2}
        sizes="45vw"
        alt={$page.data.title}
        aspect={3 / 2}
      />
    </div>
  {/if}
</div>
