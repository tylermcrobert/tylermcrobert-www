<script lang="ts">
  import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
  import { urlFor } from './sanity/client';
  import { IMG_DEVICE_SIZES } from '../constants';

  /**
   * Halfway through standard and retna
   */
  const RESOLUTION = 1.5;

  export let image: SanityImageSource;
  export let alt: string;

  export let aspect: number | undefined = undefined;
  export let sizes: string;
  export let quality = 75;
  export let color: string | undefined = undefined;

  /**
   * Take aspect ratio and invert the numerator and denominater
   */

  if (aspect) aspect = Math.round(aspect * 100) / 100;

  /**
   * Create an srcset for responsive image
   */

  const srcset = IMG_DEVICE_SIZES.map((size) => {
    let builder = urlFor(image).width(size).auto('format').quality(quality);
    if (aspect) builder = builder.height(Math.round(size / aspect));
    return `${builder.url()} ${Math.round(size / RESOLUTION)}w`;
  }).join(', ');

  /**
   * Add inline style for img
   */

  function getStyle() {
    let styles = [];
    if (aspect) styles.push(`aspect-ratio: ${aspect}`);
    if (color) styles.push(`background-color: ${color}`);
    return styles.join('; ');
  }
</script>

<img
  class="responsiveImage"
  src={urlFor(image).url()}
  {alt}
  {srcset}
  {sizes}
  style={getStyle()}
/>

<style>
  .responsiveImage {
    object-fit: cover;
    background-color: var(--color-img-preload-background);
  }
</style>
