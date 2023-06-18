<script lang="ts">
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import type { ModuleWebsite } from '$lib/sanity/queries';
  import BrowserFrame from '$lib/util/svelte/BrowserFrame.svelte';
  export let data: ModuleWebsite;

  $: ({ media, showFrame, backgroundImg } = data);

  /**
   * Non-reactive data for preveiw purposes.
   * The preview data doesn't output join dfata
   */

  const { theme } = data;
  const video = data.media?.video;
</script>

<div class="wrapper" style={`background:${theme?.background || ''}`}>
  {#if backgroundImg}
    <div class="backgroundImg">
      <ResponsiveImage
        image={backgroundImg}
        alt="Website background image"
        sizes="90vw"
        aspect={1.5}
      />
    </div>
  {/if}

  <div class="browser">
    {#if showFrame !== false && theme?.frame}
      <BrowserFrame color={theme?.frame} />
    {/if}

    {#if media?.image?.asset}
      <ResponsiveImage
        color="#ffffff"
        image={media.image}
        alt=""
        sizes="70vw"
      />
    {:else if video}
      <video src={video} muted playsinline loop autoplay />
    {/if}
  </div>
</div>

<style>
  .wrapper {
    padding: 10%;
    position: relative;
    width: 100%;

    grid-column: span 6;
  }

  .backgroundImg :global(img) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .browser {
    position: relative;
    z-index: 1;
  }
</style>
