<script lang="ts">
  import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
  import { urlFor } from './sanity/client';
  import { IMG_DEVICE_SIZES } from '../constants';

  const RESOLUTION = 1.5;

  export let image: SanityImageSource;
  export let alt: string;

  export let aspect: number | undefined = undefined;
  export let sizes: string;
  export let quality = 75;

  const srcset = IMG_DEVICE_SIZES.map((size) => {
    let builder = urlFor(image).width(size).auto('format').quality(quality);

    if (aspect) {
      builder = builder.height(size * aspect);
    }

    return `${builder.url()} ${size / RESOLUTION}w`;
  }).join(', ');
</script>

<img {alt} src={urlFor(image).url()} {srcset} {sizes} />
