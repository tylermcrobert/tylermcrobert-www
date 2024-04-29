<script lang="ts">
  import ResponsiveImage from '../ResponsiveImage.svelte';
  import type { ModuleMobileWebsite } from '$lib/sanity/queries';
  import { page } from '$app/stores';

  export let data: ModuleMobileWebsite;
  $: nonReactiveFrames = data.frames || [];
  $: nonReactiveThemeBg = data.theme?.background;
</script>

<div style={`background: ${nonReactiveThemeBg}`}>
  {#each data.frames || [] as frame, i}
    {#if frame.image?.asset}
      <ResponsiveImage
        image={frame.image}
        alt={$page.data.title}
        sizes="25vw"
      />
    {/if}

    {#if nonReactiveFrames[i].video}
      <video src={nonReactiveFrames[i].video} muted playsinline loop autoplay />
    {/if}
  {/each}
</div>
