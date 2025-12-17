<script lang="ts">
	import { stegaClean } from '@sanity/sveltekit';

	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import Image from '$components/Image.svelte';
	import Media from '$components/Media.svelte';
	import type { ModuleWebsite } from '$sanity';

	type Props = { data: ModuleWebsite };

	let { data }: Props = $props();
	let { theme, showFrame, backgroundImg, media } = $derived(data);
</script>

<div
	style:background={data.backgroundColor || data.theme?.background}
	class="relative my-standard w-full bg-black p-[10%]"
>
	<div class="relative z-10">
		{#if showFrame !== false && theme?.frame}
			<!-- prettier-ignore -->
			<span
				class="relative z-10 -mb-px block"
				style:--dots={data.theme?.dots || ''}
				style:--browser-background={data.theme?.frame || '#222'}
				style:--browser-foreground={data.theme?.foreground || '#999'}
				style:--browser-text=""
				style:--browser-stroke="color-mix(in srgb, var(--browser-foreground) 20%, transparent)"
			>
				{@render browserFrameWithUI()}
			</span>
		{/if}

		{#if media?.asset}
			<div class="bg-white">
				<Media sizes="80vw" value={media.asset} alt={null} />
			</div>
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
				fill="var(--browser-background)"
			/>
			<circle fill="var(--dots, #FF6158)" cx="6.5" cy="6.5" r="2.5" />
			<circle fill="var(--dots, #FFBE2D)" cx="22.5" cy="6.5" r="2.5" />
			<circle fill="var(--dots, #27C93F)" cx="14.5" cy="6.5" r="2.5" />
		</g>
	</svg>
{/snippet}

{#snippet browserFrameWithUI()}
	<svg fill="none" viewBox="0 0 1440 52">
		<path
			d="M0 8a8 8 0 0 1 8-8h1424c4.42 0 8 3.582 8 8v44H0V8Z"
			fill="var(--browser-background)"
		/>
		<line
			x1="0"
			y1="52"
			x2="1440"
			y2="52"
			stroke="var(--browser-stroke)"
			stroke-width="1"
		/>

		<rect
			x="16"
			y="20"
			width="12"
			height="12"
			rx="6"
			fill="var(--dots, #FF6158)"
		/>
		<rect
			x="36"
			y="20"
			width="12"
			height="12"
			rx="6"
			fill="var(--dots, #FFBE2D)"
		/>
		<rect
			x="56"
			y="20"
			width="12"
			height="12"
			rx="6"
			fill="var(--dots, #27C93F)"
		/>

		<!-- FWD/BK -->

		<g
			stroke="var(--browser-foreground)"
			stroke-width="2.25"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="m107 19-7 7 7 7M135 33l7-7-7-7" /></g
		>
		<g
			stroke="var(--browser-foreground)"
			stroke-width="2.25"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="M1406 18.5v16M1414 26.5h-16" /></g
		>

		<!-- Address Bar -->

		<rect
			x="457.5"
			y="11.5"
			width="525"
			height="27"
			rx="5.5"
			stroke="var(--browser-stroke)"
		/>

		<text
			x="50%"
			y="50%"
			font-size="12"
			class="select-none"
			fill="var(--browser-text, var(--browser-foreground))"
			font-weight="bold"
			text-anchor="middle"
			dominant-baseline="middle"
			letter-spacing=".6"
		>
			{page.data.caseStudy.title}
		</text>
	</svg>
{/snippet}
