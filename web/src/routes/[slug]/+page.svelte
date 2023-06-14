<script lang="ts">
  import type { CaseStudyQuery } from '$lib/sanity/queries';
  import ProjectPage from '$lib/ProjectPage.svelte';
  export let data: CaseStudyQuery;
</script>

<ProjectPage {data} />
