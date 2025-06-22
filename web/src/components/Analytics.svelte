<script lang="ts">
	interface Props {
		id: string;
	}

	let { id }: Props = $props();

	$effect(() => {
		const script = document.createElement('script');
		script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${id}');
      `;
		document.head.appendChild(script);
	});
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={id}"></script>
</svelte:head>
