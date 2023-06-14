<script lang="ts">
  import { NUMS } from '../constants';
  import { page } from '$app/stores';
</script>

<ul>
  {#each $page.data.caseStudies as { title, slug }, i}
    <li>
      {NUMS[i + 1]}
      <a href={`/${slug}`}>{title}</a>
    </li>
  {/each}
</ul>
