<script lang="ts">
  import type { InfoQuery } from '$lib/sanity/queries';
  import Arrow from '$lib/components/util/Arrow.svelte';
  import DotHead from '$lib/components/util/DotHead.svelte';
  import { onMount } from 'svelte';
  import { EMAIL, LINK_EMAIL, LINK_IG, NUMS, IG } from '../../constants';
  import getNowPlaying, { type NowPlayingData } from '../util/nowPlaying';
  import type { SpotifyPlaylist } from '../spotify/spotify';

  export let data: InfoQuery;
  export let playlists: SpotifyPlaylist[];

  let listenData: NowPlayingData | null = null;

  onMount(async () => (listenData = await getNowPlaying()));
</script>

<section>
  <div>
    <h2><DotHead>Bio</DotHead></h2>
    <h1>{data.bio}</h1>
  </div>

  <div>
    <div>
      <div>
        <h3><DotHead>E-M <Arrow /></DotHead></h3>
        <a href={LINK_EMAIL}>{EMAIL}</a>
      </div>
      <div>
        <h3><DotHead>IG <Arrow /></DotHead></h3>
        <a href={LINK_IG}>{IG}</a>
      </div>
    </div>

    <div>
      <h2><DotHead>Clients</DotHead></h2>
      <ul>
        {#each data.clients as client}<li>{client}</li>{/each}
      </ul>
    </div>
  </div>
</section>

<hr />

<section>
  <div>
    {#if listenData}
      {@const { trackName, artist, nowPlaying } = listenData}
      <h2><DotHead>Now Playing</DotHead></h2>
      <h3>
        {#if nowPlaying}
          Right now I'm listening to “{trackName}” by {artist} on Spotify.
        {:else}
          The last song I listened to on Spotify was “{trackName}” by {artist}.
        {/if}
      </h3>
    {/if}
  </div>

  <div>
    <h2><DotHead>Featured playlists</DotHead></h2>
    <ul>
      {#each playlists as { href, name, duration, date }, i}
        <li>
          <a {href} target="_blank">
            <h3>{NUMS[i + 1]} {name}</h3>
            <p>{date}</p>
            <p>
              {duration}<span><Arrow /></span>
            </p>
          </a>
        </li>
      {/each}
    </ul>

    <a href="/playlists">See all playlists <Arrow /></a>
  </div>
</section>
