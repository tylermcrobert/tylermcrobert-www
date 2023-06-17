<script lang="ts">
  import { caseStudyQuery, type CaseStudyQuery } from '$lib/sanity/queries';

  import ProjectPage from '$lib/ProjectPage.svelte';
  import { onMount, onDestroy } from 'svelte';
  import { sanityStore } from '$lib/sanity/client';
  import type { Subscription } from '@sanity/groq-store';

  export let data: CaseStudyQuery;

  let sub: Subscription | undefined;

  onMount(async () => {
    if (!data.slug) return;

    const params = { slug: data.slug };

    function handleSub(err: Error | undefined, res: unknown) {
      if (err) {
        console.error(err);
      } else {
        const caseStudys = res as CaseStudyQuery[];
        data = caseStudys[0];
      }
    }

    sub = sanityStore.subscribe(caseStudyQuery, params, handleSub);
  });

  onDestroy(() => {
    sub?.unsubscribe();
  });
</script>

<ProjectPage {data} />
