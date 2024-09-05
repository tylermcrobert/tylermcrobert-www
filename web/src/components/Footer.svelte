<script lang="ts">
	import { page } from '$app/stores';
	import { Link } from '$components';
</script>

<ul class="gap-standard p-standard flex flex-wrap bg-orange-500">
	{#each $page.data.footer?.links || [] as link}
		<li>
			<Link {link} />
		</li>
	{/each}
</ul>
