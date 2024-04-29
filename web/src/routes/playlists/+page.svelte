<script lang="ts">
  // TODO: Update details for mobile

  let LIMIT = 5;

  import type { SpotifyPlaylist } from '$lib/spotify/spotify';
  import DotHead from '$lib/components/util/DotHead.svelte';
  import { NUMS } from '../../constants';
  import Head from '$lib/components/util/Head.svelte';

  let itemOpen: number | null = null;

  function handleOpen(index: number) {
    if (index === itemOpen) itemOpen = null;
    else itemOpen = index;
  }

  export let data: { playlists: SpotifyPlaylist[] };
</script>

<Head pageTitle="Playlists" route="playlists" />

{#each data.playlists as { name, tracks, image, date, href, duration }, playlistIndex}
  {@const isActive = playlistIndex === itemOpen}

  <section>
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>

    <div>
      <div><DotHead>{date}</DotHead></div>
      <div><DotHead>DUR {duration}</DotHead></div>
      <div>
        <a {href} target="_blank"><DotHead>LINK ↗</DotHead></a>
      </div>
    </div>

    <ul>
      {#each tracks as { name, duration, artists }, i}
        <li class:hidden={i + 1 > LIMIT && !isActive}>
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
