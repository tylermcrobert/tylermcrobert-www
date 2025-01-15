<script>
	import { page } from '$app/stores';
</script>

<section
	class="h-available-dvh flex flex-col justify-center bg-yellow-200 px-4 text-center"
>
	{#if $page.status === 404}
		<div>404</div>
		<div>We're sorry, the page could not be found.</div>
	{:else}
		{$page.status} - {$page.error?.message}
	{/if}
</section>
