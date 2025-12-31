<script lang="ts">
	import { stegaClean } from '@sanity/sveltekit';

	import { page } from '$app/state';
	import { NUMS } from '$constants';
</script>

<div class="fixed top-0 flex min-h-dvh w-full items-center justify-center">
	<ul class="wrapper my-large">
		{#each page.data.contextCaseStudies as { title, slug }, i}
			<li class="inline text-h1">
				{i === 0 ? '' : ' '}{NUMS[i + 1]}&nbsp;<a
					class="inline hover:line-through"
					href={`/${slug}`}>{stegaClean(title)}</a
				>
			</li>
		{/each}
	</ul>
</div>
