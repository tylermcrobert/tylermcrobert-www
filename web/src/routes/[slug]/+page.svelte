<script lang="ts">
  import { caseStudyQuery, type CaseStudyQuery } from '$lib/sanity/queries';
  import ProjectPage from '$lib/ProjectPage.svelte';
  import Preview from '$lib/Preview.svelte';

  export let data: CaseStudyQuery;
</script>

<Preview
  query={caseStudyQuery}
  params={{ slug: data.slug }}
  onUpdate={(newData) => (data = newData)}
>
  <ProjectPage {data} />
</Preview>
