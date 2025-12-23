<script lang="ts">
	import { stegaClean } from '@sanity/sveltekit';

	let { id }: { id: string } = $props();

	$effect(() => {
		window.dataLayer = window.dataLayer || [];
		window.gtag = function gtag(): void {
			window.dataLayer.push(arguments);
		};
		window.gtag('js', new Date());
		window.gtag('config', stegaClean(id));
	});
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={id}"></script>
</svelte:head>
