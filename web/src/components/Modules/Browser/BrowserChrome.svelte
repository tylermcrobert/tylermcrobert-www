<script lang="ts">
	import { stegaClean } from '@sanity/sveltekit';

	import { page } from '$app/state';

	import { getWebsiteModuleThemeCtx } from './WebsiteModuleThemeProvider.svelte';

	let themeContext = getWebsiteModuleThemeCtx();
	let isSimple = $derived(stegaClean(themeContext.theme?.style) === 'simple');
</script>

<span class="relative z-10 -mb-px block">
	{#if isSimple}
		{@render browserChromeSimple()}
	{:else}
		{@render browserChromeAccurate()}
	{/if}
</span>

{#snippet browserChromeSimple()}
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

{#snippet browserChromeAccurate()}
	<svg fill="none" viewBox="0 0 1440 52">
		<path d="M0 0h1440v52H0Z" fill="var(--browser-background)" />

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

		<path
			stroke="var(--browser-foreground)"
			stroke-width="2.25"
			stroke-linecap="round"
			stroke-linejoin="round"
			d="m107 19-7 7 7 7M135 33l7-7-7-7"
		/>

		<!-- Plus -->

		<path
			d="M1406 18v16M1414 26h-16"
			stroke="var(--browser-foreground)"
			stroke-width="2.25"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>

		<!-- Address Bar -->

		<rect
			x="490"
			y="11.5"
			width="460"
			height="27"
			rx="7"
			stroke="rgba(0, 0, 0, 0.3)"
			fill="rgba(0, 0, 0, 0.15)"
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
			{themeContext.theme?.hostname || page.data.caseStudy.title}
		</text>
	</svg>
{/snippet}
