<script lang="ts">
  import { NUMS } from '../../constants';
  import { page } from '$app/stores';
</script>

<div class="fixed top-0 flex min-h-[100dvh] w-full items-center justify-center">
  <ul class="wrapper my-[calc(theme(space.large)+theme(space.nav-height))]">
    {#each $page.data.index.caseStudies as { title, slug }, i}
      <li class="text-head inline">
        {NUMS[i + 1]}&nbsp;<a
          class="inline hover:line-through"
          href={`/${slug}`}>{title}</a
        >
      </li>
    {/each}
  </ul>
</div>
