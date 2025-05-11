<script lang="ts">
	import { page } from '$app/state';
	import { metadata } from '$lib/state';

	const { url, title, description, imageUrl, siteTitle } = $derived(metadata);

	if (page.status === 200 && page.data.pageTitle === undefined) {
		console.warn('Page title is undefined.');
	}

	if (page.status === 200 && page.data.metadata === undefined) {
		console.warn('Page metadata is undefined.');
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content={url} />

	<link rel="canonical" href={url} />

	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:type" content="website" />

	{#if imageUrl}
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:image" content={imageUrl} />
	{/if}
</svelte:head>
