<script>
  import { page } from '$app/stores';
  import HomeIndex from '$lib/HomeIndex.svelte';
  import Head from '$lib/util/svelte/Head.svelte';
</script>

<Head pageTitle={null} description={$page.data.bio} route="/" />
<HomeIndex />
