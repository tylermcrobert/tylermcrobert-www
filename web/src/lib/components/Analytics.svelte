<script lang="ts">
  // import { page } from '$app/stores';

  // $: {
  //   if (typeof gtag !== 'undefined') {
  //     gtag('config', 'UA-72543203-1', {
  //       page_title: document.title,
  //       page_path: $page.url.pathname
  //     });
  //   }
  // }
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-72543203-1">
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'UA-72543203-1');
  </script>
</svelte:head>
