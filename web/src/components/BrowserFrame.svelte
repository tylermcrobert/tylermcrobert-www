<script lang="ts">
	import { page } from '$app/state';
	import { stegaClean } from '@sanity/sveltekit';
	import { getBrowserThemeCtx } from './BrowserFrameThemeProvider.svelte';

	let ctx = getBrowserThemeCtx();
</script>

<span class="relative z-10 -mb-px block">
	{#if stegaClean(ctx.getStyle()) === 'simple'}
		{@render browserFrameSimple()}
	{:else}
		{@render browserFrameAccurate()}
	{/if}
</span>

{#snippet browserFrameSimple()}
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

{#snippet browserFrameAccurate()}
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
