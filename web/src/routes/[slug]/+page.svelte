<script lang="ts">
  import Modules from '$lib/Modules.svelte';
  import type { CaseStudyQuery } from '$lib/sanity/queries';
  import { PortableText } from '@portabletext/svelte';
  import { DOT } from '../../constants';

  export let data: CaseStudyQuery;
</script>

<header class="grid">
  <h1>{data.title}</h1>
  <h2 class="h1">{data.intro}</h2>

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

<div class="grid">
  <Modules modules={data.modules} />
</div>

<style lang="scss">
  @import '../../styles/mixins';

  header {
    padding-top: var(--space-large);
  }

  h1,
  h2,
  .details,
  .description {
    grid-column: span 6;
  }

  h2 {
    max-width: 11.5em;
  }

  .deliverable {
    display: inline;
  }

  @include min-width('tablet') {
    .details,
    .description {
      grid-column: span 3;
    }

    .details {
      max-width: 16em;
    }

    .date {
      text-indent: none;
    }
  }
  /* 
  @include min-width('laptop') {
    .details {
      grid-column: span 2;
    }
  } */
</style>
