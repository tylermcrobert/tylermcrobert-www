<script lang="ts">
	import { Link } from '$components';
	import type { LinkProjection } from '$sanity';
	import type { BlockComponentProps } from '@portabletext/svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		portableText: BlockComponentProps;
		children: Snippet;
	};

	let { children, portableText }: Props = $props();
	let value = $derived(portableText.value);
	let link = $derived((value as any).link as LinkProjection | undefined);
</script>

{#if link}
	<Link {link}>
		{#if link.label}
			{link.label}
		{:else}
			{@render children()}
		{/if}
	</Link>
{/if}
