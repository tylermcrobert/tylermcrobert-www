<script lang="ts">
  import type { InfoQuery } from '$lib/sanity/queries';
  import Arrow from '$lib/util/svelte/Arrow.svelte';
  import DotHead from '$lib/util/svelte/DotHead.svelte';
  import { onMount } from 'svelte';
  import { EMAIL, LINK_EMAIL, LINK_IG, NUMS, IG, CLIENTS } from '../constants';
  import getNowPlaying, { type NowPlayingData } from './util/nowPlaying';

  export let data: InfoQuery;
  let listenData: NowPlayingData | null = null;

  onMount(async () => (listenData = await getNowPlaying()));
</script>

<section class="top">
  <div class="intro wrapper">
    <h2><DotHead>Bio</DotHead></h2>
    <h1 class="h1">{data.bio}</h1>
  </div>

  <div class="details grid">
    <div class="contactItems">
      <div class="contact">
        <h3><DotHead>E-M <Arrow /></DotHead></h3>
        <a href={LINK_EMAIL}>{EMAIL}</a>
      </div>
      <div class="contact">
        <h3><DotHead>IG <Arrow /></DotHead></h3>
        <a href={LINK_IG}>{IG}</a>
      </div>
    </div>

    <div class="clients">
      <h2><DotHead>Clients</DotHead></h2>
      <ul class="clientList">
        {#each CLIENTS as client}
          <li>{client}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<hr />

<section>
  <div class="nowPlaying wrapper">
    {#if listenData}
      {@const { trackName, artist, nowPlaying } = listenData}

      <h2><DotHead>Now Playing</DotHead></h2>

      <h3 class="h1">
        {#if nowPlaying}
          Right now I'm listening to “{trackName}” by {artist} on Spotify.
        {:else}
          The last song I listened to on Spotify was “{trackName}” by {artist}.
        {/if}
      </h3>
    {/if}
  </div>

  <div class="wrapper">
    <h2><DotHead>Playlists</DotHead></h2>
    <ul>
      {#each data.playlists as { link, title }, i}
        <li>
          <a href={link} target="_blank">
            {NUMS[i]}
            <p>{title}</p>
            <span><Arrow /></span>
          </a>
        </li>
      {/each}
    </ul>
    <a href="/playlists">See all playlists <Arrow /></a>
  </div>
</section>

<style lang="scss">
  @import '../styles/mixins';

  section {
    margin: var(--space-large) 0;
  }

  .wrapper {
    margin: var(--space-medium) auto;
  }

  .intro,
  .contactItems,
  .clients {
    grid-column: span 6;
  }

  h2 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .contact h3 {
    display: inline;
  }

  .clientList {
    column-count: 2;
    column-gap: var(--space-standard);
  }

  @include min-width('tablet') {
    .contactItems,
    .clients {
      grid-column: span 3;
    }
  }
</style>
