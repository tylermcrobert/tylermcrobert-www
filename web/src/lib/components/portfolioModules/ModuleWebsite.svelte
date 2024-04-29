<script lang="ts">
  import { page } from '$app/stores';
  import ResponsiveImage from '../ResponsiveImage.svelte';
  import type { ModuleWebsite } from '$lib/sanity/queries';
  import BrowserFrame from '$lib/components/util/BrowserFrame.svelte';
  export let data: ModuleWebsite;

  $: ({ media, showFrame, backgroundImg, theme } = data);
</script>

<div style={`background:${theme?.background || ''}`}>
  {#if backgroundImg}
    <div>
      <ResponsiveImage
        image={backgroundImg}
        alt={$page.data.title}
        sizes="90vw"
        aspect={1.5}
      />
    </div>
  {/if}

  <div>
    {#if showFrame !== false && theme?.frame}
      <BrowserFrame color={theme?.frame} dotColor={theme.dots} />
    {/if}

    {#if media?.image?.asset}
      <ResponsiveImage
        color="#ffffff"
        image={media.image}
        alt={$page.data.title}
        sizes="80vw"
      />
    {:else if media?.video}
      <video src={media.video} muted playsinline loop autoplay />
    {/if}
  </div>
</div>
