<script lang="ts">
	import { page } from '$app/state';

	let contextTitle = $derived(page.data.contextTitle);
</script>

<nav class="z-nav sticky top-0 text-white mix-blend-difference">
	<div
		class="min-h-nav-height px-standard max-w-wrapper mx-auto flex items-center justify-between py-4"
	>
		<div class="flex flex-wrap">
			<a href="/" class="mr-1">Tyler McRobert</a>

			{#if contextTitle}
				<div class="group">
					<span class="cursor-default">&times; {contextTitle}</span>
					<a href="/x/exit" class="opacity-0 group-hover:opacity-100">
						(close)
					</a>
				</div>
			{/if}
		</div>

		<a href="/info">Info</a>
	</div>
</nav>
