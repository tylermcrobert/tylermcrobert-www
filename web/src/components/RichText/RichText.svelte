<script lang="ts">
	import type { RichTextProjection } from '$sanity';
	import RichTextLinkRenderer from './RichTextLinkRenderer.svelte';
	import RichTextListRenderer from './RichTextListRenderer.svelte';
	import RichTextStyleRenderer from './RichTextStyleRenderer.svelte';
	import { PortableText, type InputValue } from '@portabletext/svelte';

	let { value }: { value: RichTextProjection } = $props();
</script>

<div class="richtext">
	<PortableText
		value={value as any}
		components={{
			block: {
				normal: RichTextStyleRenderer as any,
				h1: RichTextStyleRenderer as any,
				h2: RichTextStyleRenderer as any,
				blockquote: RichTextStyleRenderer as any
			},
			list: {
				bullet: RichTextListRenderer as any,
				number: RichTextListRenderer as any,
				normal: RichTextListRenderer as any
			},
			listItem: {
				bullet: RichTextListRenderer as any,
				number: RichTextListRenderer as any,
				normal: RichTextListRenderer as any
			},
			marks: {
				link: RichTextLinkRenderer as any,
				internalLink: RichTextLinkRenderer as any,
				externalLink: RichTextLinkRenderer as any
			},
			types: {
				// Components here...
			}
		}}
	/>
</div>
