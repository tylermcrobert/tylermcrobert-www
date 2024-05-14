<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Analytics from '$lib/components/Analytics.svelte';
</script>

<Nav />
<slot />

<Analytics />
