<script lang="ts">
  import InfoPage from '$lib/InfoPage.svelte';
  import type { InfoQuery } from '$lib/sanity/queries';
  import type { SpotifyPlaylist } from '$lib/spotify/spotify';

  export let data: { info: InfoQuery; playlists: SpotifyPlaylist[] };
</script>

<InfoPage data={data.info} playlists={data.playlists} />
