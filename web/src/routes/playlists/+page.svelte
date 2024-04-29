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

<div class="space-y-medium my-large">
  {#each data.playlists as { name, tracks, image, date, href, duration }, playlistIndex}
    {@const isActive = playlistIndex === itemOpen}

    <section class="wrapper my-medium gap-standard mx-auto flex flex-col">
      <div class="text-head flex gap-4">
        <img src={image} alt={name} class="size-[1em] object-cover" />
        <h2>{name}</h2>
      </div>

      <div class="grid-standard">
        <div class="col-span-2">
          <DotHead noMarginBottom>{date}</DotHead>
        </div>
        <div class="col-span-2">
          <DotHead noMarginBottom>DUR {duration}</DotHead>
        </div>
        <div class="col-span-2">
          <a {href} target="_blank">
            <DotHead noMarginBottom>LINK ↗</DotHead>
          </a>
        </div>
      </div>

      <ul>
        {#each tracks as { name, duration, artists }, i}
          <li
            class:hidden={i + 1 > LIMIT && !isActive}
            class="text-head inline"
          >
            {NUMS[i + 1]}
            {name}&mdash;{artists.join(' & ')} ({duration}){' '}
          </li>
        {/each}
      </ul>

      <div>
        <button on:click={() => handleOpen(playlistIndex)}>
          <DotHead noMarginBottom>
            {isActive ? 'See Less ↑' : 'See All ↓'}
          </DotHead>
        </button>
      </div>
    </section>
  {/each}
</div>
