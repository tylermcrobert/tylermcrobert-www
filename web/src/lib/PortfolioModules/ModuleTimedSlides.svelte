<script lang="ts">
  import { page } from '$app/stores';
  import ResponsiveImage from '$lib/ResponsiveImage.svelte';
  import type { ModuleTimedSlides } from '$lib/sanity/queries';
  import increment from '$lib/util/increment';
  import { onDestroy, onMount } from 'svelte';

  export let data: ModuleTimedSlides;

  let bgStyle = '';
  let interval: number;
  let index = 0;

  $: length = data.images?.length || 0;
  $: timing = (data.seconds || 1) * 1000;

  if (data.theme?.background) {
    bgStyle = `background-color: ${data.theme.background}`;
  }

  onMount(() => {
    interval = setInterval(() => {
      index = increment(index, length);
    }, timing);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="timedSlides" style={bgStyle}>
  {#each data.images || [] as image, i}
    <div class="imgWrap" class:active={i === index}>
      <ResponsiveImage {image} sizes="70vw" alt={$page.data.title} />
    </div>
  {/each}
</div>

<style lang="scss">
  .timedSlides {
    padding: 10%;
    grid-column: span 6;
  }

  .imgWrap {
    display: none;

    &.active {
      display: block;
    }
  }
</style>
