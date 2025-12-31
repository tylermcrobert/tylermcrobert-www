<script module>
	type Theme = { theme: PageBrowserFrame | null };
	const ctx = createContext<Theme>();
	export const [getWebsiteModuleThemeCtx, setWebsiteModuleThemeCtx] = ctx;
</script>

<script lang="ts">
	/**
	 * This component creates a global source for all css
	 * variables used in the browser frame. It
	 */
	import { createContext, type Snippet } from 'svelte';

	import type { BrowserFrame, PageBrowserFrame } from '$sanity';
	import { colorToString } from '$util/colorToRgba';

	type Props = {
		children: Snippet;
		pageTheme: PageBrowserFrame | null;
		defaultTheme: BrowserFrame | null;
	};

	let { children, pageTheme, defaultTheme }: Props = $props();

	let theme = $derived({
		...defaultTheme,
		...pageTheme
	}) as PageBrowserFrame;

	setWebsiteModuleThemeCtx({
		get theme() {
			return theme;
		}
	});
</script>

<div
	class="contents"
	style:--dots={colorToString(theme?.dots)}
	style:--browser-background={colorToString(theme?.frameBackground)}
	style:--browser-foreground={colorToString(theme?.frameForeground)}
	style:--browser-section-background={colorToString(theme?.sectionBackground)}
	style:--browser-text=""
	style:--browser-stroke={`
    color-mix(in srgb, var(--browser-foreground) 25%, transparent)`}
>
	{@render children()}
</div>
