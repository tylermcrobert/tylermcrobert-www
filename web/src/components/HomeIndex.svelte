<script lang="ts">
	import { page } from '$app/state';
	import { NUMS } from '../constants';
</script>

<div class="fixed top-0 flex min-h-dvh w-full items-center justify-center">
	<ul class="wrapper my-large">
		{#each page.data.contextCaseStudies as { title, slug }, i}
			<li class="text-h1 inline">
				{NUMS[i + 1]}&nbsp;<a
					class="inline hover:line-through"
					href={`/${slug}`}>{title}</a
				>
			</li>
		{/each}
	</ul>
</div>
