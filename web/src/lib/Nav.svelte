<nav class="nav">
  <div class="inner">
    <a href="/">Tyler McRobert</a>
    <a href="/info">Info</a>
  </div>
</nav>

<style>
  .nav {
    height: var(--nav-height);
    position: sticky;
    top: 0;
    z-index: var(--z-nav);

    mix-blend-mode: difference;
    color: white;
  }

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: var(--space-small) var(--space-standard);
    max-width: var(--wrap-width);
    margin: 0 auto;
  }
</style>
