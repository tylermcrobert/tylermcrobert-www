<nav class="nav">
  <div class="inner">
    <a href="/">Tyler McRobert</a>
    <a href="/info">Info</a>
  </div>
</nav>

<style>
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
</style>
