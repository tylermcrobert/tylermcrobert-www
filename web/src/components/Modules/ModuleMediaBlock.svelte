<script lang="ts">
	import { Image } from '$components';
	import type { ModuleMediaBlock } from '$sanity';

	type Props = {
		data: ModuleMediaBlock;
	};

	let { data }: Props = $props();
</script>

{#if data.image}
	<Image image={data.image} alt={null} sizes="100vw" />
{/if}
