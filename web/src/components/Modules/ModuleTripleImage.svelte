<script lang="ts">
	import { Media } from '$components';
	import type { ModuleTripleImage } from '$sanity';

	type Props = { data: ModuleTripleImage };

	let { data }: Props = $props();
</script>

<div class="grid-standard col-span-6 grid-rows-2">
	{#if data.mainMedia?.asset}
		<div
			class={`col-span-3 row-span-2 overflow-hidden ${data.imageRight ? 'col-[4_/_span_3]' : ''}`.trim()}
		>
			<Media
				value={data.mainMedia.asset}
				sizes="50vw"
				alt={null}
				imageProps={{ aspect: 2 / 3 }}
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}

	{#if data.secondaryMedia1?.asset}
		<div class="col-span-3 overflow-hidden" class:row-start-1={data.imageRight}>
			<Media
				value={data.secondaryMedia1.asset}
				sizes="50vw"
				alt={null}
				imageProps={{ aspect: 3 / 2 }}
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}

	{#if data.secondaryMedia2?.asset}
		<div class="col-span-3 overflow-hidden">
			<Media
				value={data.secondaryMedia2.asset}
				sizes="45vw"
				alt={null}
				imageProps={{ aspect: 3 / 2 }}
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}
</div>
