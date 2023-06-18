<script lang="ts">
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import type { ModuleTripleImage } from '$lib/sanity/queries';

  export let data: ModuleTripleImage;
</script>

<div
  class="tripleImage"
  class:right={data.imageRight}
  class:left={!data.imageRight}
>
  {#if data.mainImage}
    <ResponsiveImage
      image={data.mainImage}
      sizes="45vw"
      alt=""
      aspect={2 / 3}
    />
  {/if}

  {#if data.secondaryImage1}
    <ResponsiveImage
      image={data.secondaryImage1}
      sizes="45vw"
      alt=""
      aspect={3 / 2}
    />
  {/if}

  {#if data.secondaryImage2}
    <ResponsiveImage
      image={data.secondaryImage2}
      sizes="45vw"
      alt=""
      aspect={3 / 2}
    />
  {/if}
</div>

<style lang="scss">
  .tripleImage {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: var(--space-standard);
    grid-column: span 6;

    :global(img) {
      grid-column: span 3;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .right {
    :global(img):nth-child(1) {
      grid-column: 4 / span 3;
      grid-row: 1 / span 2;
    }

    :global(img):nth-child(2) {
      grid-row: 1;
    }
  }

  .left {
    :global(img):nth-child(1) {
      grid-row: 1 / span 2;
    }
  }
</style>
