<script lang="ts">
  import InfoPage from '$lib/components/InfoPage.svelte';
  import Head from '$lib/components/util/Head.svelte';
  import type { InfoQuery } from '$lib/sanity/queries';
  import type { SpotifyPlaylist } from '$lib/spotify/spotify';

  export let data: { info: InfoQuery; playlists: SpotifyPlaylist[] };
</script>

<Head pageTitle="Info" route="info" />
<InfoPage data={data.info} playlists={data.playlists} />
