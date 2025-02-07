<script lang="ts">
	import { Media } from '$components';
	import type { ModuleTripleImage } from '$sanity';

	type Props = { data: ModuleTripleImage };

	let { data }: Props = $props();
</script>

<div class="grid-standard col-span-6 grid-rows-2">
	{#if data.mainMedia}
		<div
			class={`col-span-3 row-span-2 overflow-hidden ${data.imageRight ? 'col-[4_/_span_3]' : ''}`.trim()}
		>
			<Media
				data={data.mainMedia}
				sizes="50vw"
				alt={null}
				imageAspect={2 / 3}
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}

	{#if data.secondaryMedia1}
		<div class="col-span-3 overflow-hidden" class:row-start-1={data.imageRight}>
			<Media
				data={data.secondaryMedia1}
				sizes="50vw"
				alt={null}
				imageAspect={3 / 2}
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}

	{#if data.secondaryMedia2}
		<div class="col-span-3 overflow-hidden">
			<Media
				data={data.secondaryMedia2}
				sizes="45vw"
				alt={null}
				imageAspect={3 / 2}
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}
</div>
