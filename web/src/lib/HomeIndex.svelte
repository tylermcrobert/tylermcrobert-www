<script lang="ts">
  import { NUMS } from '../constants';
  import { page } from '$app/stores';
</script>

<div class="indexWrapper">
  <ul class="index h1 wrapper">
    {#each $page.data.index.caseStudies as { title, slug }, i}
      <li class="indexItem">
        {NUMS[i + 1]}&nbsp;<a href={`/${slug}`} class="indexLink">{title}</a>
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  div.indexWrapper {
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    z-index: 0;
  }

  ul.index {
    max-width: var(--wrap-width);
    margin: var(--space-large) 0;
  }

  li.indexItem,
  a.indexLink {
    display: inline;
  }

  a.indexLink:hover {
    text-decoration: line-through;
  }
</style>
