<script lang="ts">
  import type { ModuleDynamicImage } from '$lib/sanity/queries';
  export let data: ModuleDynamicImage;
</script>

<div>{data._type}</div>
