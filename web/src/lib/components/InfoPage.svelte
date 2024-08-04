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

<section class="my-large">
  <div class="wrapper my-medium">
    <h2><DotHead>Bio</DotHead></h2>
    <h1 class="text-head">{data.bio}</h1>
  </div>

  <div class="grid-standard wrapper my-medium">
    <div class="col-span-6 md:col-span-3">
      <div>
        <h3 class="inline"><DotHead noMarginBottom>E-M <Arrow /></DotHead></h3>
        <a class="underline" href={LINK_EMAIL}>{EMAIL}</a>
      </div>

      <div>
        <h3 class="inline"><DotHead noMarginBottom>IG <Arrow /></DotHead></h3>
        <a class="underline" href={LINK_IG}>{IG}</a>
      </div>
    </div>

    <div class="col-span-6 md:col-span-3">
      <h2><DotHead>Clients</DotHead></h2>

      <ul class="gap-standard columns-2">
        {#each data.clients as client}<li>{client}</li>{/each}
      </ul>
    </div>
  </div>
</section>

<hr />

<section class="my-large">
  <div class="wrapper my-medium">
    {#if listenData}
      {@const { trackName, artist, nowPlaying } = listenData}
      <h2><DotHead>Now Playing</DotHead></h2>
      <h3 class="text-head">
        {#if nowPlaying}
          Right now I'm listening to “{trackName}” by {artist} on Spotify.
        {:else}
          The last song I listened to on Spotify was “{trackName}” by {artist}.
        {/if}
      </h3>
    {/if}
  </div>

  <div class="wrapper my-medium">
    <h2><DotHead>Featured playlists</DotHead></h2>

    <ul class="mb-4 leading-[1.3]">
      {#each playlists as { href, name, duration, date }, i}
        <li>
          <a
            {href}
            target="_blank"
            class="md:grid-standard flex justify-between"
          >
            <div class="col-span-4 flex gap-2 md:col-span-2">
              <span>{NUMS[i + 1]}</span>
              <h3 class="max-w-[18ch]">{name}</h3>
            </div>
            <p class="col-span-2 hidden md:block">{date}</p>
            <p class="gap-standard col-span-2 flex justify-between">
              {duration}<span><Arrow /></span>
            </p>
          </a>
        </li>
      {/each}
    </ul>

    <a href="/playlists" class="underline">See all playlists <Arrow /></a>
  </div>
</section>
