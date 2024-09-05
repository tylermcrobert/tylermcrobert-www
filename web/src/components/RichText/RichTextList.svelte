<script lang="ts">
	import type { BlockComponentProps } from '@portabletext/svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		portableText: BlockComponentProps;
		children: Snippet;
	};

	let { portableText, children }: Props = $props();

	let value = $derived(portableText.value);
	let { listItem, level = 0, _type } = $derived(value);

	const [level1, level2, level3] = $derived([
		(level - 1) % 3 === 0,
		(level - 2) % 3 === 0,
		(level - 3) % 3 === 0
	]);
</script>

{#if _type === '@list'}
	<svelte:element
		this={listItem === 'number' ? 'ol' : 'ul'}
		class="pl-5"
		class:mb-3={level === 1}
	>
		{@render children()}
	</svelte:element>
{:else if listItem === 'number'}
	<li
		class="max-w-rag-paragraph my-1.5 pl-1.5"
		class:list-decimal={level1}
		class:list-[lower-latin]={level2}
		class:list-[lower-roman]={level3}
	>
		{@render children()}
	</li>
{:else if listItem === 'bullet'}
	<li
		class="max-w-rag-paragraph my-1.5 pl-1.5"
		class:list-disc={level1}
		class:list-[circle]={level2}
		class:list-[square]={level3}
	>
		{@render children()}
	</li>
{:else}
	{$inspect('Could not find list ', portableText)}
{/if}
