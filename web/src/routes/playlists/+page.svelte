<script lang="ts">
  // TODO: Update details for mobile

  let LIMIT = 5;

  import type { SpotifyPlaylist } from '$lib/spotify/spotify';
  import DotHead from '$lib/util/svelte/DotHead.svelte';
  import { NUMS } from '../../constants';

  let itemOpen: number | null = null;

  function handleOpen(index: number) {
    if (index === itemOpen) itemOpen = null;
    else itemOpen = index;
  }

  export let data: { playlists: SpotifyPlaylist[] };
</script>

{#each data.playlists as { name, tracks, image, date, href, duration }, playlistIndex}
  {@const isActive = playlistIndex === itemOpen}

  <section class="wrapper playlist">
    <div class="title h1">
      <img src={image} alt={name} class="playlistImage" />
      <h2>{name}</h2>
    </div>

    <div class="details grid">
      <div class="detailItem"><DotHead>{date}</DotHead></div>
      <div class="detailItem"><DotHead>DUR {duration}</DotHead></div>
      <div class="detailItem">
        <a {href} target="_blank"><DotHead>LINK ↗</DotHead></a>
      </div>
    </div>

    <ul class="h1 playlistTracks">
      {#each tracks as { name, duration, artists }, i}
        <li class="playlistTrack" class:hidden={i + 1 > LIMIT && !isActive}>
          {NUMS[i + 1]}
          {name}&mdash;{artists.join(' & ')} ({duration}){' '}
        </li>
      {/each}
    </ul>

    <button on:click={() => handleOpen(playlistIndex)}>
      <DotHead>{isActive ? 'See Less ↑' : 'See All ↓'}</DotHead>
    </button>
  </section>
{/each}

<style lang="scss">
  .playlist {
    margin: var(--space-medium) auto;
    display: flex;
    flex-direction: column;
    gap: var(--space-standard);

    &:first-of-type {
      margin-top: var(--space-large);
    }

    &:last-of-type {
      margin-bottom: var(--space-large);
    }
  }

  .title {
    display: flex;
    gap: 1rem;

    .playlistImage {
      height: 1em;
      width: 1em;
      object-fit: cover;
    }
  }

  .detailItem {
    grid-column: span 2;
  }

  .playlistTrack {
    display: inline;

    &.hidden {
      display: none;
    }
  }
</style>
