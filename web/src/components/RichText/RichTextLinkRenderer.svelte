<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';
	import type { Snippet } from 'svelte';

	import { resolveLink } from '$sanity';

	type Props = {
		portableText: MarkComponentProps & { value: LinkValue | InternalLinkValue };
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

	let { children, portableText }: Props = $props();
	let { value } = $derived(portableText);
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
