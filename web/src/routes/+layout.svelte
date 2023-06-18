<script lang="ts">
  import '../styles/globals.scss';
  import Nav from '$lib/Nav.svelte';
  import Head from '$lib/util/svelte/Head.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Head pageTitle={null} description={data.bio} route="/" />
<Nav />
<slot />
