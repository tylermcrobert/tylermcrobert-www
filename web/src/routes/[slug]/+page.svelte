<script lang="ts">
	import { CaseStudyHeader, HomeIndex, Modules } from '$components';

	let { data } = $props();

	let { documentId, documentType, modules, caseStudy } = $derived(data);
</script>

{#if data.type === 'caseStudy' && caseStudy}
	<div
		class="relative z-project-page border-b border-dashed border-black bg-white pb-large"
	>
		<CaseStudyHeader
			index={caseStudy.index}
			intro={caseStudy.intro}
			deliverables={caseStudy.deliverables}
			date={caseStudy.date}
			title={caseStudy.title}
			description={caseStudy.description}
		/>
		<Modules {modules} {documentId} {documentType} />
	</div>

	<div class="pointer-events-none h-dvh"></div>
	<HomeIndex />
{:else}
	<div class="my-large">
		<Modules {modules} {documentId} {documentType} />
	</div>
{/if}
