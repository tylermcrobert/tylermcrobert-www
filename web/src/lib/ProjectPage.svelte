<script lang="ts">
  import Modules from '$lib/Modules.svelte';
  import type { CaseStudyQuery } from '$lib/sanity/queries';
  import { PortableText } from '@portabletext/svelte';
  import { DOT, NUMS } from '../constants';
  import HomeIndex from '$lib/HomeIndex.svelte';

  export let data: CaseStudyQuery;
</script>

<div class="projectPage">
  <header class="grid intro">
    <h1 class="title">{NUMS[0]} {data.title}</h1>
    <h2 class="overview h1">{data.intro}</h2>

    <div class="details">
      <p class="date indent">{data.date.split('.')[0]}</p>
      <ul class="deliverables">
        {#each data.deliverables as deliverable, i}
          <li class="deliverable">
            {#if i >= 1}
              {DOT}&nbsp;{deliverable}
            {:else}
              {deliverable}
            {/if}
          </li>
        {/each}
      </ul>
    </div>
    <div class="description indent">
      <PortableText value={data.description} />
    </div>
  </header>

  <div class="grid modules">
    <Modules modules={data.modules} />
  </div>
</div>

<HomeIndex projectPage />

<style lang="scss">
  @import '../styles/mixins';

  .projectPage {
    position: relative;
    z-index: var(--z-project-page);
    background: white;
  }

  .intro {
    margin-top: var(--space-large);
    margin-bottom: var(--space-standard);
  }

  h1,
  h2,
  .details,
  .description {
    grid-column: span 6;
  }

  .overview {
    max-width: 11.5em;
  }

  .deliverable {
    display: inline;
  }

  .modules {
    padding-bottom: var(--space-large);
    border-bottom: 1px dashed black;
  }

  @include min-width('tablet') {
    /* 50/50 */
    .details,
    .description {
      grid-column: span 3;
    }

    /* Tighten details */
    .details {
      max-width: 16em;
    }

    /* little nudge for some extra space */
    .overview {
      margin-bottom: var(--space-small);
    }

    /* Separate date from deliverables */
    .date {
      margin-bottom: var(--space-small);
      text-indent: 0;
    }
  }
</style>
