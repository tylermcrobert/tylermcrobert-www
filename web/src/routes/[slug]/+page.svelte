<script lang="ts">
	import CaseStudyHeader from '$components/CaseStudyHeader.svelte';
	import HomeIndex from '$components/HomeIndex.svelte';
	import BrowserFrameThemeProvider from '$components/Modules/Browser/BrowserFrameThemeProvider.svelte';
	import Modules from '$components/Modules/Modules.svelte';
	import type { BrowserFrame } from '$sanity';

	let { data } = $props();

	let { documentId, documentType, modules, caseStudy } = $derived(data);
</script>

{#if data.type === 'caseStudy' && caseStudy}
	<div
		class="relative z-project-page border-b border-dashed border-black bg-white pb-large"
	>
		<BrowserFrameThemeProvider theme={caseStudy.theme as BrowserFrame | null}>
			<CaseStudyHeader
				index={caseStudy.index}
				intro={caseStudy.intro}
				deliverables={caseStudy.deliverables}
				date={caseStudy.date}
				title={caseStudy.title}
				description={caseStudy.description}
			/>
			<Modules {modules} {documentId} {documentType} />
		</BrowserFrameThemeProvider>
	</div>

	<div class="pointer-events-none h-dvh"></div>
	<HomeIndex />
{:else}
	<div class="my-large">
		<Modules {modules} {documentId} {documentType} />
	</div>
{/if}
