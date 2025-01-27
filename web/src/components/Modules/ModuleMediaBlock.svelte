<script lang="ts">
	import { Media } from '$components';
	import type { ModuleMediaBlock } from '$sanity';

	type Props = {
		data: ModuleMediaBlock;
	};

	let { data }: Props = $props();
</script>

{#if data.media}
	<div class="my-standard">
		<Media
			data={data.media}
			imageAspect={data.aspect}
			sizes="100vw"
			alt={null}
		/>
	</div>
{/if}
