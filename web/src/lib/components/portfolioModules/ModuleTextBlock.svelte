<script lang="ts">
  import type { ModuleTextBlock } from '$lib/sanity/queries';
  import { PortableText } from '@portabletext/svelte';

  export let data: ModuleTextBlock;
</script>

<div class="indent col-span-6 md:col-span-3 [&:not(:last-child)]:mb-4">
  <PortableText value={data.content || []} components={{}} />
</div>
