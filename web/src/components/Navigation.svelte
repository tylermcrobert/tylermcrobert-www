<script lang="ts">
	import { page } from '$app/state';

	let contextTitle = $derived(page.data.contextTitle);
</script>

<nav class="sticky top-0 z-nav text-white mix-blend-difference">
	<div
		class="mx-auto flex min-h-nav-height max-w-wrapper items-center justify-between px-standard"
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
