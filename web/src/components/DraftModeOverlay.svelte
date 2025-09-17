<script lang="ts">
	import { page } from '$app/state';
	import { PUBLIC_SANITY_STUDIO_URL } from '$env/static/public';
	import { VisualEditing } from '@sanity/sveltekit';
	import { onMount } from 'svelte';

	let isWithinSanityStudio = $state(false);

	let presentationLink = $derived(
		`${PUBLIC_SANITY_STUDIO_URL}/presentation?preview=${page.url.pathname}`
	);

	onMount(() => {
		const isInFrame = window.self !== window.top;
		isWithinSanityStudio = isInFrame;
	});
</script>

{#if page.data.previewEnabled}
	{#if isWithinSanityStudio}
		<VisualEditing />
	{/if}

	<div
		class="fixed bottom-4 right-4 z-nav flex items-center justify-center gap-2 rounded-full bg-[#ffcc5a] p-2 px-4 text-[16px] text-black"
	>
		{#if presentationLink && !isWithinSanityStudio}
			<a href={presentationLink} class="hover:underline">Previewing Drafts</a>

			<a href="/api/draft/disable" aria-label="exit draft mode">
				<svg
					class="stroke-current"
					width="10"
					height="10"
					viewBox="0 0 10 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M9 1L1 9" stroke-width="1.5" />
					<path d="M9 9L1 1" stroke-width="1.5" />
				</svg>
			</a>
		{:else}
			Previewing Drafts
		{/if}
	</div>
{/if}
