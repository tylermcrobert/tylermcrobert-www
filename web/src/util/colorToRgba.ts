import type { Color } from '$sanity';

export function colorToString(
	color: Color | null | undefined
): string | undefined {
	if (!color?.rgb) return undefined;
	const { r, g, b, a } = color.rgb;
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}
