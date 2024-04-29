<script lang="ts">
  import { page } from '$app/stores';
</script>

<div>
  <p>{$page.status}</p>
  <p>{$page.error?.message}</p>
</div>
