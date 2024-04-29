<script lang="ts">
  import { client } from '../sanity/client';
  import type { SanityImage } from '../sanity/types';
  import Image from '@tylermcrobert/svelte-sanity-image';

  export let image: SanityImage;
  export let alt: string;

  export let aspect: number | undefined = undefined;
  export let sizes: string;
  export let quality = 75;
  export let className: string | undefined = '';
</script>

<Image
  {image}
  {client}
  {alt}
  {quality}
  {sizes}
  {aspect}
  class={`bg-image-preload ${className}`.trim()}
/>
