<script lang="ts">
  import InfoPage from '$lib/InfoPage.svelte';
  import type { InfoQuery } from '$lib/sanity/queries';

  export let data: InfoQuery;
</script>

<InfoPage {data} />
