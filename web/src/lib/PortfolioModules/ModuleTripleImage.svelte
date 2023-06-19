<script lang="ts">
  import { page } from '$app/stores';
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import type { ModuleTripleImage } from '$lib/sanity/queries';

  export let data: ModuleTripleImage;
</script>

<div
  class="tripleImage grid"
  class:right={data.imageRight}
  class:left={!data.imageRight}
>
  {#if data.mainImage}
    <div class="img image-main">
      <ResponsiveImage
        image={data.mainImage}
        sizes="45vw"
        alt={$page.data.title}
        aspect={2 / 3}
      />
    </div>
  {/if}

  {#if data.secondaryImage1}
    <div class="img image-secondary">
      <ResponsiveImage
        image={data.secondaryImage1}
        sizes="45vw"
        alt={$page.data.title}
        aspect={3 / 2}
      />
    </div>
  {/if}

  {#if data.secondaryImage2}
    <div class="img image-tertiary">
      <ResponsiveImage
        image={data.secondaryImage2}
        sizes="45vw"
        alt={$page.data.title}
        aspect={3 / 2}
      />
    </div>
  {/if}
</div>

<style lang="scss">
  .tripleImage {
    grid-template-rows: repeat(2, 1fr);
    grid-column: span 6;

    :global(img) {
      grid-column: span 3;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .img {
    grid-column: span 3;
    overflow: hidden;
  }

  .image-main {
    grid-row: span 2;
  }

  .right {
    .image-main {
      grid-column: 4 / span 3;
    }

    .image-secondary {
      grid-row: 1;
    }
  }
</style>
