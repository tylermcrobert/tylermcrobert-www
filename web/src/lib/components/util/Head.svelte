<script lang="ts">
  import { formatTitle } from '$lib/util/formatTitle';

  export let pageTitle: string | null;
  export let route: string;
  export let description: string;

  $: title = pageTitle ? formatTitle(pageTitle) : 'Tyler McRobert';
  $: pathWithoutSlug = route.replace(/^\//, '');
  $: url = `https://tylermcrobert.com/${pathWithoutSlug}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />

  <meta name="description" content={description} />
  <meta property="og:description" content={description} />

  <meta property="og:url" content={url} />
  <!-- <meta property="og:image" content="" /> -->
  <!-- <meta property="og:image:width" content="1200" /> -->
  <!-- <meta property="og:image:height" content="630" /> -->

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Tyler McRobert" />

  <!-- <meta name="twitter:card" content="summary_large_image" /> -->
  <meta name="twitter:title" content={title} />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:description" content={description} />
  <!-- <meta name="twitter:image:src" content="" /> -->
</svelte:head>
