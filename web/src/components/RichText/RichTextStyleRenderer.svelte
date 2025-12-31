<script lang="ts">
	import type { BlockComponentProps } from '@portabletext/svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		portableText: BlockComponentProps;
	};

	let { children, portableText }: Props = $props();

	let { style } = $derived(portableText.value);

	let isHeading = $derived(['h1', 'h2'].includes(style || ''));

	let elementName = $derived.by(() => {
		if (style === 'normal') return 'p';
		if (style === 'h1') return 'h2';
		return style;
	});
</script>

{#if children}
	<svelte:element
		this={elementName}
		class={{
			'max-w-rag-heading text-h1': style === 'h1',
			'text-h2': style === 'h2',
			'text-para first-of-type:indent': style === 'normal',
			'border-l border-current pl-3': style === 'blockquote',
			'mb-3 last:mb-0': true,
			'mt-6 first:mt-0': isHeading,
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
