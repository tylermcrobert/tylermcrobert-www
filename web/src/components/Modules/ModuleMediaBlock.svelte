<script lang="ts">
	import { Media } from '$components';
	import type { ModuleMediaBlock } from '$sanity';

	type Props = {
		data: ModuleMediaBlock;
	};

	let { data }: Props = $props();
</script>

{#if data.media}
	<Media data={data.media} sizes="100vw" alt={null} />
{/if}
