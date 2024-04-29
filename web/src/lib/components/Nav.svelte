<script>
  import { page } from '$app/stores';

  let ctxTitle = $page.data.index.title;
  if (ctxTitle === 'Default') ctxTitle = null;
</script>

<nav>
  <div>
    <div>
      <a href="/">Tyler McRobert</a>

      {#if ctxTitle}
        <a href="/c/default">
          &times;
          <span>{ctxTitle}</span>
          <span>(close)</span>
        </a>
      {/if}
    </div>

    <a href="/info">Info</a>
  </div>
</nav>
