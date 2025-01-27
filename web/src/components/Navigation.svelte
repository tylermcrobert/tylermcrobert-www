<script lang="ts">
	import { page } from '$app/state';

	let contextTitle = $derived(page.data.contextTitle);
</script>

<nav class="z-nav sticky top-0 text-white mix-blend-difference">
	<div
		class="h-nav-height px-standard max-w-wrapper mx-auto flex items-center justify-between"
	>
		<div>
			<a href="/">Tyler McRobert</a>

			{#if contextTitle}
				<a href="/c/exit" class="group">
					&times;
					<span>{contextTitle}</span>
					<span class="opacity-0 group-hover:opacity-100">(close)</span>
				</a>
			{/if}
		</div>

		<a href="/info">Info</a>
	</div>
</nav>
