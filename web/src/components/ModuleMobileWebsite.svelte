<script lang="ts">
	import type { ModuleMobileWebsite } from '$sanity';
	import Media from './Media.svelte';

	type Props = { data: ModuleMobileWebsite };

	let { data }: Props = $props();
</script>

<div
	class={[
		'col-span-6 flex items-center justify-evenly gap-[10%] p-[10%]',
		{ 'bg-black': !data.themeBackground }
	]}
	style:background={data.themeBackground}
>
	{#each data.frames || [] as frame}
		{#if frame.media?.asset}
			<Media
				value={frame.media.asset}
				sizes={`${100 / (data.frames?.length || 1)}vw`}
				alt={null}
				class="max-h-[70vh] w-auto overflow-hidden"
			/>
		{/if}
	{/each}
</div>
