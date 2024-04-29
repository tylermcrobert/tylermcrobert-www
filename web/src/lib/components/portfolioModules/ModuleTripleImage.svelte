<script lang="ts">
  import { page } from '$app/stores';
  import ResponsiveImage from '../ResponsiveImage.svelte';
  import type { ModuleTripleImage } from '$lib/sanity/queries';

  export let data: ModuleTripleImage;
</script>

<div class="grid-standard col-span-6 grid-rows-2">
  {#if data.mainImage}
    <div
      class={`col-span-3 row-span-2 overflow-hidden ${data.imageRight ? 'col-[4_/_span_3]' : ''}`.trim()}
    >
      <ResponsiveImage
        image={data.mainImage}
        sizes="45vw"
        alt={$page.data.title}
        aspect={2 / 3}
        className="h-full w-full object-cover"
      />
    </div>
  {/if}

  {#if data.secondaryImage1}
    <div class="col-span-3 overflow-hidden" class:row-start-1={data.imageRight}>
      <ResponsiveImage
        image={data.secondaryImage1}
        sizes="45vw"
        alt={$page.data.title}
        aspect={3 / 2}
        className="h-full w-full object-cover"
      />
    </div>
  {/if}

  {#if data.secondaryImage2}
    <div class="col-span-3 overflow-hidden">
      <ResponsiveImage
        image={data.secondaryImage2}
        sizes="45vw"
        alt={$page.data.title}
        aspect={3 / 2}
        className="h-full w-full object-cover"
      />
    </div>
  {/if}
</div>
