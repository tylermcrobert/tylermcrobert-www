<script lang="ts">
	import { RichText } from '$components';
	import type { ModuleTextBlock } from '$sanity';

	type Props = { data: ModuleTextBlock };

	let { data }: Props = $props();
</script>

{#if data.richText}
	<div class="bg-purple-300 p-4">
		<RichText value={data.richText} />
	</div>
{/if}
