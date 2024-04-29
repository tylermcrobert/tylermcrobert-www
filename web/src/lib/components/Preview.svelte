<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { previewClient, sanityStore } from '$lib/sanity/client';
  import type { Subscription } from '@sanity/groq-store';
  import type { QueryParams } from '@sanity/client';

  export let query: string;
  export let params: QueryParams;
  export let onUpdate: (cb: any) => void;

  let loading = true;
  let sub: Subscription | undefined;

  onMount(async () => {
    sub = sanityStore.subscribe(query, params, () => {
      // Set timeout because the fetch is delayed
      setTimeout(() => {
        previewClient.fetch(query, params).then((newRes) => {
          onUpdate(newRes[0]);
          loading = false;
        });
      }, 1000);
    });
  });

  onDestroy(() => sub?.unsubscribe());
</script>

{#if loading}
  <div>loading preview...</div>
{/if}

<div>
  <span>Preview Mode</span>
  <a href="/api/clear-preview">✕</a>
</div>

<slot />
