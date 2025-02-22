<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { BlockComponentProps } from '@portabletext/svelte';

	type Props = {
		children: Snippet;
		portableText: BlockComponentProps;
	};

	let { children, portableText }: Props = $props();

	let { indexInParent, global, value } = $derived(portableText);
	let { style } = $derived(value);

	let isHeading = $derived(style === 'h1' || style === 'h2');
	let isFirst = $derived(indexInParent === 0);
	let isLast = $derived(global.ptBlocks.length === indexInParent + 1);

	let elementName = $derived.by(() => {
		if (style === 'normal') return 'p';
		return style;
	});
</script>

{#if children}
	<svelte:element
		this={elementName}
		class={{
			'text-h1': style === 'h1',
			'text-h2': style === 'h2',
			'text-para': style === 'normal',
			'border-l border-current pl-3': style === 'blockquote',
			'mt-6': !isFirst && isHeading,
			'mb-3': !isLast,
			'max-w-rag-paragraph': !isHeading
		}}
	>
		{@render children()}
	</svelte:element>
{:else}
	{console.log(
		'Unsupported style while rendering rich text style: ',
		portableText
	)}
{/if}
