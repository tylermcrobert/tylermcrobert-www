<script lang="ts">
  import { caseStudyQuery, type CaseStudyQuery } from '$lib/sanity/queries';
  import ProjectPage from '$lib/components/ProjectPage.svelte';
  import Preview from '$lib/components/Preview.svelte';
  import Head from '$lib/util/svelte/Head.svelte';

  export let data: { caseStudy: CaseStudyQuery; isPreview: boolean };
</script>

<Head
  pageTitle={data.caseStudy.title}
  route={data.caseStudy.slug}
  description={data.caseStudy.intro || ''}
/>

{#if data.isPreview}
  <Preview
    query={caseStudyQuery}
    params={{ slug: data.caseStudy.slug }}
    onUpdate={(newData) => (data.caseStudy = newData)}
  >
    <ProjectPage data={data.caseStudy} />
  </Preview>
{:else}
  <ProjectPage data={data.caseStudy} />
{/if}
