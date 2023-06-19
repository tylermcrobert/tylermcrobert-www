<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { sanityStore } from '$lib/sanity/client';
  import type { Subscription } from '@sanity/groq-store';
  import type { QueryParams } from '@sanity/client';

  export let query: string;
  export let params: QueryParams;
  export let onUpdate: (cb: any) => void;

  let loading = true;
  let sub: Subscription | undefined;

  onMount(async () => {
    sub = sanityStore.subscribe(query, params, (err, res) => {
      if (err) throw err;
      if (!(res && res[0])) throw Error('Response not found');

      loading = false;
      onUpdate(res[0]);
    });
  });

  onDestroy(() => sub?.unsubscribe());
</script>

{#if loading}
  <div class="loadingIndicator">loading preview...</div>
{/if}

<div class="previewIndicator">
  <span>Preview Mode</span>
  <a href="/api/clear-preview">✕</a>
</div>

<slot />

<style>
  .loadingIndicator {
    position: fixed;
    bottom: var(--space-standard);
    right: var(--space-standard);
    z-index: var(--z-preview-overlay);

    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;

    background: white;
  }

  .previewIndicator {
    font-size: 0.8em;

    position: fixed;
    bottom: var(--space-standard);
    right: var(--space-standard);
    z-index: var(--z-preview-overlay);

    display: flex;
    gap: 0.5em;
    align-items: center;

    border-radius: 5em;

    background: orange;
    padding: 0.5em 1em;
  }

  a {
    font-size: 0.7rem;

    cursor: pointer;

    border: 1px solid black;
    width: 1.5em;
    height: 1.5em;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 999px;
  }
</style>
