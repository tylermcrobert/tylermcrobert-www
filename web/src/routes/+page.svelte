<script>
  import { page } from '$app/stores';
  import HomeIndex from '$lib/components/HomeIndex.svelte';
  import Head from '$lib/components/util/Head.svelte';
</script>

<Head pageTitle={null} description={$page.data.bio} route="/" />
<HomeIndex />
