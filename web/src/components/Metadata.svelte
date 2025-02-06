<script lang="ts" module>
	export function getTitle() {
		const { siteTitle, pageTitle, homepageTitle, titleOverride } = page.data;

		if (page.error) {
			return `${page.status} ${page.error.message} – ${siteTitle}`;
		}

		if (titleOverride) {
			return titleOverride;
		}

		if (homepageTitle && page.data.pathname === '/') {
			return homepageTitle;
		}

		return pageTitle ? `${pageTitle} – ${siteTitle}` : siteTitle;
	}
</script>

<script lang="ts">
	import { page } from '$app/state';
	import { urlFor } from '$sanity/image';

	const title = $derived(getTitle());

	let { description, url, siteTitle, imageUrl } = $derived.by(() => {
		const {
			pageTitle,
			siteMetadata,
			siteTitle,
			metadata: pageMetadata
		} = page.data as App.PageData;

		if (page.status === 200 && pageTitle === undefined) {
			console.warn('Page title is undefined.');
		}

		if (page.status === 200 && pageMetadata === undefined) {
			console.warn('Page metadata is undefined.');
		}

		let image = pageMetadata?.image || siteMetadata?.image;

		return {
			url: page.url.origin + page.url.pathname,
			description: pageMetadata?.description || siteMetadata?.description,
			imageUrl: image ? urlFor(image).width(1200).height(630).url() : null,
			siteTitle
		};
	});
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
