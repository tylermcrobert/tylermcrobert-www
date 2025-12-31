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

	let mergedTheme = $derived({
		...defaultTheme,
		...pageTheme
	}) as PageBrowserFrame;

	const themeStrings = $derived({
		dots: colorToString(mergedTheme?.dots),
		frameBackground: colorToString(mergedTheme?.frameBackground),
		frameForeground: colorToString(mergedTheme?.frameForeground),
		sectionBackground: colorToString(mergedTheme?.sectionBackground),
		addressBarBackground: colorToString(mergedTheme?.addressBarBackground),
		addressBarStroke: colorToString(mergedTheme?.addressBarStroke)
	});

	setWebsiteModuleThemeCtx({
		get theme() {
			return mergedTheme;
		}
	});
</script>

<div
	class="contents"
	style:--chrome-dots={themeStrings.dots}
	style:--section-background={themeStrings.sectionBackground}
	style:--chrome-background={themeStrings.frameBackground}
	style:--chrome-foreground={themeStrings.frameForeground}
	style:--chrome-address-bar-stroke={themeStrings.addressBarStroke}
	style:--chrome-address-bar-background={themeStrings.addressBarBackground}
	style:--chrome-address-bar-text=""
>
	{@render children()}
</div>
