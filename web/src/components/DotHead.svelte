<script lang="ts">
	import type { Snippet } from 'svelte';
	import { DOT } from '../constants';

	type Props = {
		noMarginBottom?: boolean;
		children: Snippet;
	};

	let { noMarginBottom, children }: Props = $props();
</script>

<span class="inline-block uppercase" class:mb-4={!noMarginBottom}>
	{DOT}&nbsp;{@render children()}
</span>
