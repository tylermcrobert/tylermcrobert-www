<script lang="ts">
	import { RichText } from '$components';
	import type { CaseStudy, Nullable } from '$sanity';
	import { DOT, NUMS } from '$constants';

	type CaseStudyIntroProps = Nullable<
		Required<
			Pick<
				CaseStudy,
				'intro' | 'deliverables' | 'date' | 'title' | 'description'
			>
		>
	>;

	type Props = CaseStudyIntroProps & { index: number };

	let {
		//
		title,
		deliverables,
		description,
		date,
		intro,
		index
	}: Props = $props();
</script>

<header class="wrapper grid-standard mb-standard pt-large">
	<h1 class="col-span-6">{NUMS[index + 1]} {title}</h1>
	<h2 class="text-h1 max-w-rag-heading col-span-6 md:mb-small">
		{intro}
	</h2>

	<div class="col-span-6 md:col-span-3 md:max-w-[16em]">
		<p class="indent md:mb-small md:indent-0">{date?.split('.')[0]}</p>
		<ul>
			{#each deliverables || [] as deliverable, i}
				<li class="inline">
					{#if i >= 1}
						{' '}{DOT}&nbsp;{deliverable}
					{:else}
						{deliverable}
					{/if}
				</li>
			{/each}
		</ul>
	</div>

	<div class="indent col-span-6 md:col-span-3">
		{#if description}
			<div>
				<RichText value={description} />
			</div>
		{/if}
	</div>
</header>
