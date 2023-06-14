<script lang="ts">
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import type { ModuleDynamicImage } from '$lib/sanity/queries';
  export let data: ModuleDynamicImage;

  let half = data.span === 'half';
  let full = data.span === 'full';
</script>

<div class="img" class:half class:full>
  <ResponsiveImage
    image={data.image}
    alt=""
    sizes={half ? '50vw' : '100vw'}
    aspect={data.aspect}
  />
</div>

<style>
  .img :global(img) {
    max-width: 100%;
  }
</style>
