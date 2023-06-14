<script lang="ts">
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import type { ModuleWebsite } from '$lib/sanity/queries';
  import BrowserFrame from '$lib/util/BrowserFrame.svelte';
  export let data: ModuleWebsite;
  const { media, theme, showFrame, background } = data;
</script>

<div class="wrapper" style={`background:${theme.background}`}>
  {#if background}
    <div class="backgroundImg">
      <ResponsiveImage
        image={background}
        alt="Website background image"
        sizes="90vw"
        aspect={1.5}
      />
    </div>
  {/if}

  <div class="browser">
    {#if showFrame !== false}
      <BrowserFrame color={theme.frame} />
    {/if}

    {#if media.image}
      <ResponsiveImage
        color="#ffffff"
        image={media.image}
        aspect={media.image.aspect}
        alt=""
        sizes="70vw"
      />
    {:else if media.video}
      <video src={media.video} muted playsinline loop autoplay />
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
