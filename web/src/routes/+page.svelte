<script lang="ts">
	import { Modules } from '$components';

	let { data } = $props();
</script>

{#each data.contextCaseStudies as { title, slug }}
	<h1 class="wrapper">
		<a href={`/${slug}`}>{title}</a>
	</h1>
{/each}
