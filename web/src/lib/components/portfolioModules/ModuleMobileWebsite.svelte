<script lang="ts">
  import ResponsiveImage from '../ResponsiveImage.svelte';
  import type { ModuleMobileWebsite } from '$lib/sanity/queries';
  import { page } from '$app/stores';

  export let data: ModuleMobileWebsite;
  const nonReactiveFrames = data.frames || [];
  const nonReactiveThemeBg = data.theme?.background;
</script>

<div class="mobileWebsite" style={`background: ${nonReactiveThemeBg}`}>
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
    padding: 10%;
    gap: 10%;

    :global(img),
    :global(video) {
      overflow: hidden;
      max-height: 70vh;
      width: auto;
    }
  }
</style>
