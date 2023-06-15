<script lang="ts">
  import type { InfoQuery } from '$lib/sanity/queries';
  import Arrow from '$lib/util/Arrow.svelte';
  import DotHead from '$lib/util/DotHead.svelte';
  import { EMAIL, LINK_EMAIL, LINK_IG, NUMS, IG, CLIENTS } from '../constants';

  export let data: InfoQuery;
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
    <h2><DotHead>Now Playing</DotHead></h2>
    <h3 class="h1">Right now I'm playing...</h3>
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
    margin: var(--space-medium) 0;
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
