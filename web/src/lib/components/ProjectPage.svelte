<script lang="ts">
  import Modules from '$lib/components/Modules.svelte';
  import type { CaseStudyQuery } from '$lib/sanity/queries';
  import { PortableText } from '@portabletext/svelte';
  import { DOT, NUMS } from '../../constants';
  import HomeIndex from '$lib/components/HomeIndex.svelte';
  import { page } from '$app/stores';

  export let data: CaseStudyQuery;

  $: caseStudies = $page.data.index.caseStudies;
  $: index = caseStudies.findIndex((cs) => cs.slug === data.slug);
</script>

{#key data.slug}
  <div
    class="z-project-page pb-large relative border-b border-dashed border-black bg-white"
  >
    <header class="wrapper pt-large mb-standard grid-standard">
      <h1 class="col-span-6">{NUMS[index + 1]} {data.title}</h1>
      <h2 class="text-head md:mb-small col-span-6 max-w-[11.5em]">
        {data.intro}
      </h2>

      <div class="col-span-6 md:col-span-3 md:max-w-[16em]">
        <p class="mb-small indent md:indent-0">{data.date?.split('.')[0]}</p>
        <ul>
          {#each data.deliverables || [] as deliverable, i}
            <li class="inline">
              {#if i >= 1}
                {DOT}&nbsp;{deliverable}
              {:else}
                {deliverable}
              {/if}
            </li>
          {/each}
        </ul>
      </div>

      <div class="indent col-span-6 md:col-span-3">
        {#if data.description}
          <PortableText value={data.description} components={{}} />
        {/if}
      </div>
    </header>

    <div>
      <Modules modules={data.modules || []} />
    </div>
  </div>
{/key}

<div class="pointer-events-none h-[100dvh]" />
<HomeIndex />
