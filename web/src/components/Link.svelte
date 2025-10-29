<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import {
		getLinkProjectionLabel,
		type LinkProjection,
		resolveLinkProjection
	} from '$sanity';

	type Props = {
		children?: Snippet;
		link: LinkProjection;
		external?: boolean;
	} & HTMLAttributes<HTMLAnchorElement>;

	let { link, children, external, ...props }: Props = $props();

	let href = $derived(resolveLinkProjection(link));
	let label = $derived(getLinkProjectionLabel(link));
</script>

<a
	{href}
	{...props}
	target={link.href && external !== false ? '_blank' : undefined}
>
	{#if children}
		{@render children()}
	{:else if label}
		{label}
	{/if}
</a>
