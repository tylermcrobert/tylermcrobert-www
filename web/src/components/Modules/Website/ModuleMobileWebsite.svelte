<script lang="ts">
	import Media from '$components/Media.svelte';
	import { sanityDataAttribute } from '$lib/attachments';
	import type { ModuleMobileWebsite } from '$sanity';

	type Props = { data: ModuleMobileWebsite };

	let { data }: Props = $props();
</script>

<div class="wrapper">
	<div
		class={[
			'col-span-6 flex items-center justify-evenly gap-[10%] p-[10%]',
			{ 'bg-black': !data.themeBackground }
		]}
		style:background={data.themeBackground || 'var(--section-background)'}
	>
		{#each data.frames || [] as frame}
			{#if frame.media?.asset}
				<div
					class="w-full"
					{@attach sanityDataAttribute(`frames[_key=="${frame._key}"]`)}
				>
					<Media
						value={frame.media.asset}
						sizes={`${100 / (data.frames?.length || 1)}vw`}
						alt={null}
					/>
				</div>
			{/if}
		{/each}
	</div>
</div>
