<script lang="ts">
  import Modules from '$lib/Modules.svelte';
  import type { CaseStudyQuery } from '$lib/sanity/queries';
  import { PortableText } from '@portabletext/svelte';
  import { DOT } from '../../constants';

  export let data: CaseStudyQuery;
</script>

<header class="grid">
  <h1>{data.title}</h1>
  <h2>{data.intro}</h2>

  <div class="details">
    <p class="date">{data.date.split('.')[0]}</p>
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

  <div class="description">
    <PortableText value={data.description} />
  </div>
</header>

<div>
  <Modules modules={data.modules} />
</div>

<style lang="scss">
  header {
    h1,
    h2,
    .details,
    .description {
      grid-column: span 6;
    }

    .deliverable {
      display: inline;
    }
  }
</style>
