<script lang="ts">
	import {
		setModuleContext,
		type ModuleContext
	} from '$lib/context/moduleContext';
	import { type Snippet } from 'svelte';

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
