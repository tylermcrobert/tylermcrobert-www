<script lang="ts">
  import type { TrackLink } from './+page';
  export let data: { tracks: TrackLink[] };

  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('en-UK', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    return formattedDate;
  }
</script>

<ul>
  {#each data.tracks as { title, date, slug }}
    <li>
      <a href={`/track/${slug}`}>
        <div>{title}</div>
        <div>{formatDate(date)}</div>
      </a>
    </li>
  {/each}
</ul>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<style>
  ul {
    border-top: 1px dashed black;
  }

  li a {
    padding: 0 var(--space-standard);
    height: var(--nav-height);

    border-bottom: 1px dashed black;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
