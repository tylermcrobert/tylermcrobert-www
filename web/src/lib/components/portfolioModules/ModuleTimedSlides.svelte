<script lang="ts">
  import { page } from '$app/stores';
  import ResponsiveImage from '../ResponsiveImage.svelte';
  import type { ModuleTimedSlides } from '$lib/sanity/queries';
  import increment from '$lib/util/increment';
  import { onDestroy, onMount } from 'svelte';

  export let data: ModuleTimedSlides;

  let interval: number;
  let index = 0;

  $: length = data.images?.length || 0;
  $: timing = (data.seconds || 1) * 1000;

  onMount(() => {
    interval = window.setInterval(() => {
      index = increment(index, length);
    }, timing);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div
  class="col-span-6 bg-neutral-100 p-[10%]"
  style:background-color={data.theme?.background}
>
  {#each data.images || [] as image, i}
    <div class:hidden={i !== index}>
      <ResponsiveImage {image} sizes="70vw" alt={$page.data.title} />
    </div>
  {/each}
</div>
