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
  <div>
    <header>
      <h1>{NUMS[index + 1]} {data.title}</h1>
      <h2>{data.intro}</h2>

      <div>
        <p>{data.date?.split('.')[0]}</p>
        <ul>
          {#each data.deliverables || [] as deliverable, i}
            <li>
              {#if i >= 1}
                {DOT}&nbsp;{deliverable}
              {:else}
                {deliverable}
              {/if}
            </li>
          {/each}
        </ul>
      </div>
      <div>
        {#if data.description}
          <PortableText value={data.description} />
        {/if}
      </div>
    </header>

    <div>
      <Modules modules={data.modules || []} />
    </div>
  </div>
{/key}

<div />
<HomeIndex />
