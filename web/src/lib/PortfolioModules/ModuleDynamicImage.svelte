<script lang="ts">
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import type { ModuleDynamicImage } from '$lib/sanity/queries';
  export let data: ModuleDynamicImage;

  let half = data.span === 'half';
  let full = !half;
</script>

<div class="img" class:half class:full>
  <ResponsiveImage
    image={data.image}
    alt=""
    sizes={half ? '50vw' : '100vw'}
    aspect={data.image.aspect}
  />
</div>

<style lang="scss">
  @import '../../styles/mixins';

  .full,
  .half {
    grid-column: span 6;
  }

  @include min-width('tablet') {
    .half {
      grid-column: span 3;
    }
  }
</style>
