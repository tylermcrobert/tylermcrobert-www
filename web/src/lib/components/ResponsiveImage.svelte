<script lang="ts">
  import { urlFor } from '../sanity/client';
  import { IMG_DEVICE_SIZES } from '../../constants';
  import type { SanityImage } from '../sanity/types';
  import getImageDimensions from '../sanity/lib/getImageDimensions';

  /**
   * Halfway through standard and retna
   */
  const RESOLUTION = 1.5;

  export let image: SanityImage;
  export let alt: string;

  export let aspect: number | undefined = undefined;
  export let sizes: string;
  export let quality = 75;
  export let color: string | undefined = undefined;
  export let className: string | undefined = '';

  $: enforcedAspect = aspect; // rename to be more clear

  /**
   * Create an srcset for responsive image
   */

  $: srcset = IMG_DEVICE_SIZES.map((size) => {
    let builder = urlFor(image).width(size).auto('format').quality(quality);

    if (enforcedAspect) {
      builder = builder.height(Math.round(size / enforcedAspect));
    }

    return `${builder.url()} ${Math.round(size / RESOLUTION)}w`;
  }).join(', ');

  /**
   * Add inline style for img
   */

  $: getStyle = () => {
    let styles = [];
    if (color) styles.push(`background-color: ${color}`);
    styles.push(
      `aspect-ratio: ${enforcedAspect || getImageDimensions(image).aspectRatio}`
    );
    return styles.join('; ');
  };
</script>

<img
  src={urlFor(image).url()}
  {alt}
  {srcset}
  {sizes}
  style={getStyle()}
  class={`bg-image-preload ${className}`.trim()}
/>
