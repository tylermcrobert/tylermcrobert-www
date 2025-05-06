<script lang="ts">
	import type { RichTextProjection } from '$sanity';
	import RichTextLinkRenderer from './RichTextLinkRenderer.svelte';
	import RichTextListRenderer from './RichTextListRenderer.svelte';
	import RichTextStyleRenderer from './RichTextStyleRenderer.svelte';
	import { PortableText } from '@portabletext/svelte';

	type Props = {
		value: RichTextProjection;
		class?: string;
	};

	let { value, class: className }: Props = $props();
</script>

<div class={['richtext', className]}>
	<PortableText
		{value}
		components={{
			block: {
				normal: RichTextStyleRenderer,
				h1: RichTextStyleRenderer,
				h2: RichTextStyleRenderer,
				blockquote: RichTextStyleRenderer
			},
			list: {
				bullet: RichTextListRenderer,
				number: RichTextListRenderer,
				normal: RichTextListRenderer
			},
			listItem: {
				bullet: RichTextListRenderer,
				number: RichTextListRenderer,
				normal: RichTextListRenderer
			},
			marks: {
				link: RichTextLinkRenderer,
				internalLink: RichTextLinkRenderer,
				externalLink: RichTextLinkRenderer
			},
			types: {
				// Components here...
			}
		}}
	/>
</div>
