<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { BodyScrollLock, Link } from '$components';

	let isMobileNavOpen = $state(false);

	afterNavigate(() => {
		isMobileNavOpen = false;
	});
</script>

<nav
	class="h-nav gap-standard px-standard z-nav sticky top-0 flex items-center bg-blue-500"
>
	<div class="flex-1">
		<a href="/">Fast Forward</a>
	</div>

	<ul class="gap-standard hidden bg-purple-400 sm:flex">
		{#each $page.data.navigation?.links || [] as link}
			<li>
				<Link {link} />
			</li>
		{/each}
	</ul>

	<button
		class="bg-green-500 sm:hidden"
		onclick={() => (isMobileNavOpen = !isMobileNavOpen)}
	>
		{isMobileNavOpen ? 'Close' : 'Menu'}
	</button>
</nav>

{#if isMobileNavOpen}
	<BodyScrollLock />

	<aside
		class="h-available-dvh top-nav p-standard z-nav fixed w-full bg-red-200 sm:hidden"
	>
		<ul>
			{#each $page.data.site.navigation?.links || [] as link}
				<li>
					<Link {link} />
				</li>
			{/each}
		</ul>
	</aside>
{/if}
