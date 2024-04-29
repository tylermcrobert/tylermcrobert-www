<script lang="ts">
  import { NUMS } from '../../constants';
  import { page } from '$app/stores';
</script>

<div>
  <ul>
    {#each $page.data.index.caseStudies as { title, slug }, i}
      <li>
        {NUMS[i + 1]}&nbsp;<a href={`/${slug}`}>{title}</a>
      </li>
    {/each}
  </ul>
</div>
