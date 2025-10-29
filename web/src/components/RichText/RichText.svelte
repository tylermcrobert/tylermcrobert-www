<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	import type { RichTextProjection } from '$sanity';

	import RichTextLinkRenderer from './RichTextLinkRenderer.svelte';
	import RichTextListRenderer from './RichTextListRenderer.svelte';
	import RichTextStyleRenderer from './RichTextStyleRenderer.svelte';

	let { value }: { value: RichTextProjection } = $props();
</script>

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
