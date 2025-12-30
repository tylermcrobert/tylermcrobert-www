<script module>
	type Theme = { getStyle: () => BrowserFrame['style'] };
	const ctx = createContext<Theme>();
	export const [getBrowserThemeCtx, setBrowserThemeCtx] = ctx;
</script>

<script lang="ts">
	/**
	 * This component creates a global source for all css
	 * variables used in the browser frame. It
	 */
	import { createContext, type Snippet } from 'svelte';

	import type { BrowserFrame } from '$sanity';
	import { colorToString } from '$util/colorToRgba';

	type Props = {
		children: Snippet;
		theme: BrowserFrame;
	};

	let { children, theme }: Props = $props();

	// TODO: I don't like this. Feels clunky
	setBrowserThemeCtx({ getStyle: () => theme.style });
</script>

<div
	class="contents"
	style:--dots={colorToString(theme.dots)}
	style:--browser-background={colorToString(theme.frameBackground)}
	style:--browser-foreground={colorToString(theme.frameForeground)}
	style:--browser-section-background={colorToString(theme.sectionBackground)}
	style:--browser-text=""
	style:--browser-stroke={`
    color-mix(in srgb, var(--browser-foreground) 25%, transparent)`}
>
	{@render children()}
</div>
