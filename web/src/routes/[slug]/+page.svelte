<script lang="ts">
	import { CaseStudyIntro, Modules } from '$components';

	let { data } = $props();
</script>

{#if data.caseStudy}
	<CaseStudyIntro
		index={0}
		intro={data.caseStudy.intro}
		deliverables={data.caseStudy.deliverables}
		date={data.caseStudy.date}
		title={data.caseStudy.title}
		description={data.caseStudy.description}
	/>
	<Modules modules={data.modules} />
{:else}
	<Modules modules={data.modules} />
{/if}
