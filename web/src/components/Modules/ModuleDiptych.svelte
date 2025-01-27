<script lang="ts">
	import { Media, RichText } from '$components';
	import type { ModuleDiptych } from '$sanity';

	type Props = { data: ModuleDiptych };

	let { data }: Props = $props();
</script>

<div class="gap-standard grid-cols-2 sm:grid">
	{#each data.items || [] as item}
		{#if item._type === 'diptych.media' && item.media}
			<Media
				data={item.media}
				alt={null}
				sizes="(min-width: 768px), 50vw, 100vw"
				imageAspect={item.aspect}
			/>
		{:else if item._type === 'diptych.text' && item.richText}
			<RichText value={item.richText} />
		{/if}
	{/each}
</div>
