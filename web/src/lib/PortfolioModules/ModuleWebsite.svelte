<script lang="ts">
  // TODO: make background image responsive
  // TODO: try to get img width and height correct to avoid layout shift
  // TODO: Confirm everything with existing site
  // TODO: Confirm desktop/mobile is correct

  import { urlFor } from '$lib/sanity/client';
  import type { ModuleWebsite } from '$lib/sanity/queries';
  import BrowserFrame from '$lib/util/BrowserFrame.svelte';
  export let data: ModuleWebsite;
  const { media, theme, showFrame, background } = data;
</script>

<div class="wrapper" style={`background:${theme.background}`}>
  {#if background}
    <img
      src={urlFor(background).width(100).auto('format').url()}
      width="10px"
      height="10px"
      class="backgroundImg"
      alt=""
    />
  {/if}

  <div class="browser">
    {#if showFrame !== false}
      <BrowserFrame color={theme.frame} />
    {/if}

    {#if media._type === 'image'}
      <img src={urlFor(media.image).width(100).auto('format').url()} alt="" />
    {:else if media._type === 'video'}
      <video src={media.video} muted playsinline loop autoplay />
    {/if}
  </div>
</div>

<style>
  .wrapper {
    padding: 10%;
    position: relative;
  }

  .backgroundImg {
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

  img,
  video {
    width: 100%;
    max-width: 100%;
  }
</style>
