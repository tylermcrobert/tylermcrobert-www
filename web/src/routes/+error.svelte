<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="err">
  <p>{$page.status}</p>
  <p>{$page.error?.message}</p>
</div>

<style>
  .err {
    height: calc(100vh - var(--nav-height));
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    justify-content: space-evenly;
  }
</style>
