<script lang="ts">
	import RichText from '$components/RichText/RichText.svelte';
	import type { RichTextProjection } from '$sanity';
	import type { RichText as RichTextType } from '$sanity';

	type Props = {
		as: string;
		value: RichTextProjection;
	};

	const { as, ...props }: Props = $props();

	let value = $derived.by(() => {
		return (props.value as RichTextType).map((block) => {
			if (block._type === 'block') {
				return { ...block, style: as };
			}

			return block;
		}) as RichTextProjection;
	});
</script>

<RichText {...props} {value} />
