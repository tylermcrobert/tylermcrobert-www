<script lang="ts">
	import { RichText } from '$components';
	import type { ModuleTextBlock } from '$sanity';

	type Props = { data: ModuleTextBlock };

	let { data }: Props = $props();
</script>

<div class="p-standard gap-standard flex flex-col bg-purple-300">
	<RichText value={data.richText} />
</div>
