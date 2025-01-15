<script lang="ts">
	import { resolveLink } from '$sanity';
	import type { MarkComponentProps } from '@portabletext/svelte';
	import type { Snippet } from 'svelte';

	type Props = {
		portableText: MarkComponentProps;
		children: Snippet;
	};

	type LinkValue = {
		_type: 'link';
		href: 'string' | null;
		key: string;
		blank: boolean;
	};

	type InternalLinkValue = {
		_type: 'internalLink';
		slug: string | null;
		type: string;
	};

	type Value = LinkValue | InternalLinkValue;

	let { children, portableText }: Props = $props();
	let value: Value = $derived(portableText.value) as any;
</script>

{#if value._type === 'link' && typeof value.href === 'string'}
	<a
		href={value.href}
		target={value.blank === false ? '' : '_blank'}
		class="underline"
	>
		{@render children()}
	</a>
{:else if value._type === 'internalLink'}
	<a
		href={resolveLink({
			slug: value.slug,
			type: value.type
		})}
		class="underline"
	>
		{@render children()}
	</a>
{/if}
