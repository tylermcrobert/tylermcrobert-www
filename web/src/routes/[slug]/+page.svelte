<script lang="ts">
	import { CaseStudyHeader, HomeIndex, Modules } from '$components';

	let { data } = $props();
</script>

{#if data.caseStudy}
	<div
		class="z-project-page pb-large relative border-b border-dashed border-black bg-white"
	>
		<CaseStudyHeader
			index={data.index}
			intro={data.caseStudy.intro}
			deliverables={data.caseStudy.deliverables}
			date={data.caseStudy.date}
			title={data.caseStudy.title}
			description={data.caseStudy.description}
		/>
		<Modules modules={data.modules} />
	</div>

	<div class="pointer-events-none h-dvh" />
	<HomeIndex />
{:else}
	<Modules modules={data.modules} />
{/if}
