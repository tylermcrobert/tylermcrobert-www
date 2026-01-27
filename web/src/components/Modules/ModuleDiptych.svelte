<script lang="ts">
	import Media from '$components/Media.svelte';
	import RichText from '$components/RichText/RichText.svelte';
	import { sanityDataAttribute } from '$lib/attachments';
	import type { ModuleDiptych } from '$sanity';

	type Props = { data: ModuleDiptych };

	let { data }: Props = $props();
</script>

<div class="wrapper my-standard grid gap-standard sm:grid-cols-2">
	{#each data.items || [] as item}
		{#if item._type === 'diptych.media' && item.media?.asset}
			<div {@attach sanityDataAttribute(`.items[_key=="${item._key}"]`)}>
				<Media
					value={item.media.asset}
					alt={null}
					sizes="(min-width: 768px), 50vw, 100vw"
					imageProps={{ aspect: item.aspect || undefined }}
					videoProps={{ aspect: item.aspect || undefined }}
				/>
			</div>
		{:else if item._type === 'diptych.text' && item.richText}
			<div>
				<RichText value={item.richText} />
			</div>
		{:else if item._type === 'diptych.spacer'}
			<div class="hidden sm:grid"></div>
		{/if}
	{/each}
</div>
