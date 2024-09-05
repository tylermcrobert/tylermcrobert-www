<script lang="ts">
	import type { RichTextMinimal } from '$sanity';
	import { PortableText } from '@portabletext/svelte';
	import RichTextList from './RichTextList.svelte';
	import RichTextLink from './RichTextLink.svelte';

	type Props = { value: RichTextMinimal | undefined };

	let { value }: Props = $props();
</script>

{#if value}
	<div class="rich-text">
		<PortableText
			{value}
			components={{
				block: {},
				marks: {
					link: RichTextLink
				},
				list: {
					bullet: RichTextList,
					number: RichTextList,
					normal: RichTextList
				},
				listItem: {
					bullet: RichTextList,
					number: RichTextList,
					normal: RichTextList
				}
			}}
		/>
	</div>
{/if}

<style>
	/* 
	 * FPO HEADINGS
	 */

	.rich-text :global(h1) {
		@apply leading-1.05 max-w-rag-heading text-[3.25rem] font-semibold md:text-[5rem];
	}

	.rich-text :global(h2) {
		@apply leading-1.05 max-w-rag-heading text-[2.5rem] font-semibold md:text-[3.5rem];
	}

	.rich-text :global(h3) {
		@apply leading-1.1 max-w-rag-heading text-[2rem] font-semibold md:text-[2.5rem];
	}

	.rich-text :global(h4) {
		@apply leading-1.1 max-w-rag-paragraph text-[1.5rem] font-semibold;
	}

	.rich-text :global(h5) {
		@apply leading-1.2 max-w-rag-paragraph text-[1rem] font-semibold;
	}

	.rich-text :global(h6) {
		@apply leading-1.3 max-w-rag-paragraph text-[0.8rem] font-semibold uppercase;
	}

	.rich-text :global(p) {
		@apply max-w-rag-paragraph leading-1.4;
	}

	.rich-text :global(blockquote) {
		@apply max-w-rag-paragraph border-foreground/10 border-l-2 border-opacity-10 px-3;
	}

	.rich-text :global(strong) {
		@apply font-semibold;
	}

	.rich-text :global(a) {
		@apply decoration-foreground/30 underline decoration-1 underline-offset-2;
	}

	/* 
	 * SPACING MODIFICATIONS
	 */

	.rich-text :global(p),
	.rich-text :global(blockquote) {
		@apply not-last:mb-3;
	}

	.rich-text :global(h1),
	.rich-text :global(h2),
	.rich-text :global(h3),
	.rich-text :global(h4) {
		@apply not-last:mb-4 not-first:mt-8;
	}

	.rich-text :global(h5),
	.rich-text :global(h6) {
		@apply not-last:mb-2 not-first:mt-8;
	}
</style>
