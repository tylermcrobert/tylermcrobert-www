<script lang="ts">
  import { page } from '$app/stores';
  import { imageUrlBuilder } from '@tylermcrobert/svelte-sanity-image';
  import type { SanityImage } from '$lib/sanity/types';
  import { formatTitle } from '$lib/util/formatTitle';
  import { client } from '$lib/sanity/client';

  export let pageTitle: string | null;
  export let route: string;
  export let description: string | null = $page.data.bio;
  export let sanityImage: SanityImage | null = $page.data.previewImage || null;

  let imgUrl: string | null = null;

  if (sanityImage) {
    imgUrl = imageUrlBuilder(client)
      .image(sanityImage)
      .width(1200)
      .height(630)
      .url();
  }

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
  <link rel="canonical" href={url} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Tyler McRobert" />

  <meta name="twitter:title" content={title} />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:description" content={description} />

  {#if imgUrl}
    <meta property="og:image" content={imgUrl} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:src" content={imgUrl} />
  {/if}
</svelte:head>
