<script>
  import { page } from '$app/stores';

  let ctxTitle = $page.data.index.title;
  if (ctxTitle === 'Default') ctxTitle = null;
</script>

<nav class="nav">
  <div class="inner">
    <div class="nameLockup">
      <a href="/">Tyler McRobert</a>

      {#if ctxTitle}
        <a href="/c/default" class="ctxOverlay">
          &times;
          <span>{ctxTitle}</span>
          <span class="close">(close)</span>
        </a>
      {/if}
    </div>

    <a href="/info">Info</a>
  </div>
</nav>

<style lang="scss">
  .nav {
    position: sticky;
    top: 0;
    z-index: var(--z-nav);

    color: white;

    mix-blend-mode: difference;
  }

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: var(--nav-height);
    padding: 0 var(--space-standard);
    max-width: var(--wrap-width);
    margin: 0 auto;
  }

  .ctxOverlay {
    &:hover .close {
      display: inline-block;
    }

    .close {
      display: none;
    }
  }
</style>
