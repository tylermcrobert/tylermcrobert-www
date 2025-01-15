<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { BodyScrollLock, Link } from '$components';

	let isMobileNavOpen = $state(false);

	afterNavigate(() => {
		isMobileNavOpen = false;
	});
</script>

<nav
	class="h-nav-height z-nav sticky top-0 flex items-center gap-4 bg-blue-500 px-4"
>
	<div class="flex-1">
		<a href="/">svelte-sanity-starter</a>
	</div>

	<ul class="hidden gap-4 bg-purple-400 sm:flex">
		{#each page.data.navigation?.links || [] as link}
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
		class="h-available-dvh top-nav-height z-nav fixed w-full bg-red-200 p-4 sm:hidden"
	>
		<ul>
			{#each page.data.site.navigation?.links || [] as link}
				<li>
					<Link {link} />
				</li>
			{/each}
		</ul>
	</aside>
{/if}
