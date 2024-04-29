<script lang="ts">
  import type { ModuleTextBlock } from '$lib/sanity/queries';
  import { PortableText } from '@portabletext/svelte';

  export let data: ModuleTextBlock;
</script>

<div class="indent col-span-6 space-y-4 md:col-span-3">
  <PortableText value={data.content || []} components={{}} />
</div>
