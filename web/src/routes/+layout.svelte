<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import WindowHeight from '$lib/components/WindowHeight.svelte';
</script>

<Nav />
<slot />
<WindowHeight />
