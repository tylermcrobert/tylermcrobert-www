<script lang="ts">
	import { page } from '$app/state';
	import { Link } from '$components';
</script>

<footer class="bg-orange-500 p-4">
	<ul class="flex flex-wrap gap-4">
		{#each page.data.footer?.links || [] as link}
			<li>
				<Link {link} />
			</li>
		{/each}
	</ul>
</footer>
