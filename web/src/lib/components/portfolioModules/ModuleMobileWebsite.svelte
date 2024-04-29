<script lang="ts">
  import ResponsiveImage from '../ResponsiveImage.svelte';
  import type { ModuleMobileWebsite } from '$lib/sanity/queries';
  import { page } from '$app/stores';

  export let data: ModuleMobileWebsite;
  $: nonReactiveFrames = data.frames || [];
  $: nonReactiveThemeBg = data.theme?.background;
</script>

<div
  class="col-span-6 flex items-center justify-evenly gap-[10%] bg-black p-[10%]"
  style:background-color={nonReactiveThemeBg}
>
  {#each data.frames || [] as frame, i}
    {#if frame.image?.asset}
      <ResponsiveImage
        image={frame.image}
        alt={$page.data.title}
        sizes="25vw"
        className="media"
      />
    {/if}

    {#if nonReactiveFrames[i].video}
      <video
        class="media"
        src={nonReactiveFrames[i].video}
        muted
        playsinline
        loop
        autoplay
      />
    {/if}
  {/each}
</div>

<style>
  .media {
    @apply max-h-[70vh] w-auto overflow-hidden;
  }
</style>
