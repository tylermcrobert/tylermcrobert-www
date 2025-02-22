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
		class={['max-w-rag-paragraph pl-5', { 'mb-3': level === 1 }]}
	>
		{@render children()}
	</svelte:element>
{:else if listItem === 'number'}
	<li
		class={{
			'list-decimal': level1,
			'list-[lower-latin]': level2,
			'list-[lower-roman]': level3
		}}
	>
		{@render children()}
	</li>
{:else if listItem === 'bullet'}
	<li
		class={{
			'list-disc': level1,
			'list-[circle]': level2,
			'list-[square]': level3
		}}
	>
		{@render children()}
	</li>
{:else}
	{console.log('Could not find list ', portableText)}
{/if}
