<script lang="ts">
  import type { ModuleTextBlock } from '$lib/sanity/queries';
  import { PortableText } from '@portabletext/svelte';

  export let data: ModuleTextBlock;
</script>

<div class="textBlock indent">
  <PortableText value={data.content || []} />
</div>

<style lang="scss">
  @import '../../../styles/mixins';

  .textBlock {
    grid-column: span 6;

    :global(:not(:last-child)) {
      margin-bottom: 1em;
    }
  }

  @include min-width('tablet') {
    .textBlock {
      grid-column: span 3;
    }
  }
</style>
