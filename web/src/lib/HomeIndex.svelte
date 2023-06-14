<script lang="ts">
  import { NUMS } from '../constants';
  import { page } from '$app/stores';

  export let projectPage = false;
</script>

<div class="indexWrapper" class:homepage={!projectPage}>
  <ul class="index h1">
    {#each $page.data.caseStudies as { title, slug }, i}
      <li class="indexItem">
        {NUMS[i + 1]}&nbsp;<a href={`/${slug}`} class="indexLink">{title}</a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  div.indexWrapper {
    height: 100vh;
    display: flex;
    align-items: center;

    position: sticky;
    bottom: 0;
    z-index: 0;

    &.homepage {
      margin-top: calc(var(--nav-height) * -1);
    }
  }

  ul.index {
    max-width: 60rem;
    margin: var(--space-large) var(--space-standard);
  }

  li.indexItem,
  a.indexLink {
    display: inline;
  }

  a.indexLink:hover {
    text-decoration: line-through;
  }
</style>
