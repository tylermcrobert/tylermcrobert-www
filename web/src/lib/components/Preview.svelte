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
  <div
    class="z-preview-overlay fixed inset-0 flex items-center justify-center bg-white"
  >
    loading preview...
  </div>
{/if}

<div
  class="right-standard bottom-standard z-preview-overlay fixed flex gap-2 rounded-full bg-orange-400 px-3 py-1.5 font-[0.8rem]"
>
  <span>Preview Mode</span>
  <a href="/api/clear-preview">✕</a>
</div>

<slot />
