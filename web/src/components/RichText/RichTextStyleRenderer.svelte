<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { BlockComponentProps } from '@portabletext/svelte';

	type Props = {
		children: Snippet;
		portableText: BlockComponentProps;
	};

	let { children, portableText }: Props = $props();
	let { style } = $derived(portableText.value);

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
			'text-h1': style === 'h1',
			'text-h2': style === 'h2',
			'text-para first-of-type:indent-8': style === 'normal',
			'border-l border-current pl-3': style === 'blockquote'
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
