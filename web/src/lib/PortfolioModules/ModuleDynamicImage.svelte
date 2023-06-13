<script lang="ts">
  import { urlFor } from '$lib/sanity/client';
  import type { ModuleDynamicImage } from '$lib/sanity/queries';
  export let data: ModuleDynamicImage;
</script>

<img src={urlFor(data.image).width(100).auto('format').url()} alt="" />
