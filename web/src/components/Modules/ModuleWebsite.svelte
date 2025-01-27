<script lang="ts">
	import { Image, Media } from '$components';
	import type { ModuleWebsite } from '$sanity';

	type Props = { data: ModuleWebsite };

	let { data }: Props = $props();
	let { theme, showFrame, backgroundImg, media } = $derived(data);
</script>

<div
	style:background={data.theme?.background}
	class="my-standard relative w-full bg-black p-[10%]"
>
	<div class="relative z-10">
		{#if showFrame !== false && theme?.frame}
			{@render browserFrame()}
		{/if}

		{#if media}
			<Media sizes="80vw" data={media} alt={null} />
		{/if}
	</div>

	{#if backgroundImg}
		<div>
			<Image
				image={backgroundImg}
				alt={null}
				sizes="90vw"
				aspect={1.5}
				class="absolute inset-0 z-0 h-full w-full object-cover"
			/>
		</div>
	{/if}
</div>

{#snippet browserFrame()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 439 13"
		preserveAspectRatio="none"
		class="block w-full"
	>
		<g fill="none" fill-rule="evenodd">
			<path
				d="M4 0h431c2.209139 0 4 1.790861 4 4v9H0V4c0-2.209139 1.790861-4 4-4z"
				fill={data.theme?.frame}
			/>
			<circle fill={data.theme?.dots || '#FF6158'} cx="6.5" cy="6.5" r="2.5" />
			<circle fill={data.theme?.dots || '#FFBE2D'} cx="22.5" cy="6.5" r="2.5" />
			<circle fill={data.theme?.dots || '#27C93F'} cx="14.5" cy="6.5" r="2.5" />
		</g>
	</svg>
{/snippet}
