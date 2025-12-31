<script lang="ts">
	import { type Snippet } from 'svelte';

	import {
		type ModuleContext,
		setModuleContext
	} from '$lib/context/moduleContext';

	interface Props extends ModuleContext {
		children: Snippet;
	}

	let { children, ...moduleContext }: Props = $props();

	function getContext() {
		return moduleContext;
	}

	setModuleContext(getContext());
</script>

{@render children()}
