<script lang="ts">
	import Media from '$components/Media/Media.svelte';
	import type { ModuleMediaBlock } from '$sanity';

	type Props = {
		data: ModuleMediaBlock;
	};

	let { data }: Props = $props();
</script>

{#if data.media?.asset}
	<div class="my-standard">
		<Media
			value={data.media.asset}
			sizes="100vw"
			alt={null}
			imageProps={{ aspect: data.aspect }}
			videoProps={{ aspect: data.aspect }}
		/>
	</div>
{/if}
