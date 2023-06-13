<script lang="ts">
  import type { HomeQuery } from '$lib/sanity/queries';
  import { NUMS } from '../constants';

  export let data: HomeQuery;
</script>

<ul>
  {#each data.caseStudies as { title, slug }, i}
    <li>
      {NUMS[i + 1]}
      <a href={`/${slug}`}>{title}</a>
    </li>
  {/each}
</ul>
