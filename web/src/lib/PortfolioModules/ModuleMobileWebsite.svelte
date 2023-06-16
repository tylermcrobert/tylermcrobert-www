<script lang="ts">
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import type { ModuleMobileWebsite } from '$lib/sanity/queries';

  export let data: ModuleMobileWebsite;

  console.log(data);
</script>

<div class="mobileWebsite" style={`background: ${data.theme?.background}`}>
  {#each data.frames as frame}
    {#if frame.image?.asset}
      <ResponsiveImage image={frame.image} alt="Mobile Website" sizes="25vw" />
    {/if}

    {#if frame.video}
      <video
        class="websiteItem"
        src={frame.video}
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
