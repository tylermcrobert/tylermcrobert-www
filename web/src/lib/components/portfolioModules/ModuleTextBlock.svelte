<script lang="ts">
  import type { ModuleTextBlock } from '$lib/sanity/queries';
  import { PortableText } from '@portabletext/svelte';

  export let data: ModuleTextBlock;
</script>

<div>
  <PortableText value={data.content || []} />
</div>
