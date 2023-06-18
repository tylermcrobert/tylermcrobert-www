<script lang="ts">
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import type { ModuleMobileWebsite } from '$lib/sanity/queries';
  import { page } from '$app/stores';

  export let data: ModuleMobileWebsite;
  const nonReactiveFrames = data.frames || [];
</script>

<div class="mobileWebsite" style={`background: ${data.theme?.background}`}>
  {#each data.frames || [] as frame, i}
    {#if frame.image?.asset}
      <ResponsiveImage
        image={frame.image}
        alt={$page.data.title}
        sizes="25vw"
      />
    {/if}

    {#if nonReactiveFrames[i].video}
      <video
        class="websiteItem"
        src={nonReactiveFrames[i].video}
        muted
        playsinline
        loop
        autoplay
      />
    {/if}
  {/each}
</div>

<style lang="scss">
  .mobileWebsite {
    grid-column: span 6 / auto;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background: black;
    padding: 7%;
    gap: 7%;
  }

  .websiteItem {
    overflow: hidden;
    max-width: 15rem;
  }
</style>
