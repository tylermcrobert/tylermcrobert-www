<script>
	import { page } from '$app/state';
</script>

<section
	class="h-available-dvh flex flex-col items-center justify-center px-4 text-center"
>
	{#if page.status === 404}
		<div class="text-h1 mb-2">404</div>
		<div>This page could not be found.</div>
	{:else}
		{page.status} - {page.error?.message}
	{/if}
</section>
