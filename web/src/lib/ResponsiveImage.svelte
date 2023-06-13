<script lang="ts">
  import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
  import { urlFor } from './sanity/client';

  export let image: SanityImageSource;
  export let alt: string;
</script>

<img {alt} src={urlFor(image).url()} />
