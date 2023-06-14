<script lang="ts">
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import type { ModuleDynamicImage } from '$lib/sanity/queries';
  export let data: ModuleDynamicImage;
</script>

<ResponsiveImage image={data.image} alt="" sizes="100vw" />
