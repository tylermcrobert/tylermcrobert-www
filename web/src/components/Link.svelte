<script lang="ts">
	import { resolveLinkProjection, type LinkProjection } from '$sanity';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		children?: Snippet;
		link: LinkProjection;
	} & HTMLAttributes<HTMLAnchorElement>;

	let { link, children, ...props }: Props = $props();

	let href = $derived(resolveLinkProjection(link));
</script>

<a {href} {...props} target={link.href && '_blank'}>
	{#if children}
		{@render children()}
	{:else if link.label}
		{link.label}
	{:else if link.reference?.title}
		{link.reference.title}
	{/if}
</a>
