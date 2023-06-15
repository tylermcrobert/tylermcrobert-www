<script lang="ts">
  import type { ModuleMobileWebsite } from '$lib/sanity/queries';

  export let data: ModuleMobileWebsite;
  console.log(data.frames);
</script>

<div class="mobileWebsite">
  {#each data.frames as frame}
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
  }

  .websiteItem {
    margin: 7%;
    overflow: hidden;
    max-width: 15rem;
  }
</style>
