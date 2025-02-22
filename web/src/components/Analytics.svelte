<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/state';

	let { id } = $props<{ id: string }>();

	$effect(() => {
		if (typeof gtag !== 'undefined') {
			gtag('config', id, {
				page_title: document.title,
				page_path: page.url.pathname
			});
		}
	});
</script>

<svelte:head>
	{#if !dev}
		<script
			async
			src="https://www.googletagmanager.com/gtag/js?id=G-EY4G6J80EJ"
		>
		</script>
		<script>
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}

			gtag('js', new Date());
			gtag('config', id);
		</script>
	{/if}
</svelte:head>
