<script lang="ts">
	import { RichText } from '$components';
	import type { ModuleTextBlock } from '$sanity';

	type Props = { data: ModuleTextBlock };

	let { data }: Props = $props();
</script>

{#if data.richText}
	<div class="my-standard grid-cols-6 md:grid">
		<div class="indent col-span-4 lg:col-span-3">
			<RichText value={data.richText} />
		</div>
	</div>
{/if}
