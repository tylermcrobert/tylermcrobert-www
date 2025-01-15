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
		return style;
	});
</script>

{#if children}
	<svelte:element
		this={elementName}
		class:text-h1={style === 'h1'}
		class:text-h2={style === 'h2'}
		class:text-para={style === 'normal'}
	>
		{@render children()}
	</svelte:element>
{:else}
	{console.log(
		'Unsupported style while rendering rich text style: ',
		portableText
	)}
{/if}
