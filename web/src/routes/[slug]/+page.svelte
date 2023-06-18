<script lang="ts">
  import { caseStudyQuery, type CaseStudyQuery } from '$lib/sanity/queries';
  import ProjectPage from '$lib/ProjectPage.svelte';
  import Preview from '$lib/Preview.svelte';

  export let data: { caseStudy: CaseStudyQuery; isPreview: boolean };
</script>

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
