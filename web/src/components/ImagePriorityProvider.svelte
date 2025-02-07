<script lang="ts">
	import { setContext, type Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		priority: boolean;
	};

	let { children, priority }: Props = $props();

	setContext('imagePriorityContext', priority);
</script>

{@render children()}
