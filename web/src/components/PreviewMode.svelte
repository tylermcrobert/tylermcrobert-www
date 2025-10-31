<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	import { page } from '$app/state';
	import { PUBLIC_SANITY_STUDIO_URL } from '$env/static/public';

	type Props = {
		enabled: boolean;
		children: Snippet;
	};

	let { enabled, children }: Props = $props();

	let isInIframe = $derived(
		typeof window !== 'undefined' && window.self !== window.top
	);
	let presentationLink = $derived(
		`${PUBLIC_SANITY_STUDIO_URL}/presentation?preview=${page.url.pathname}`
	);

	let PreviewMode = $state<
		typeof import('@sanity/sveltekit').PreviewMode | null
	>(null);
	let VisualEditing = $state<
		typeof import('@sanity/sveltekit').VisualEditing | null
	>(null);

	onMount(async () => {
		PreviewMode = (await import('@sanity/sveltekit')).PreviewMode;
		VisualEditing = (await import('@sanity/sveltekit')).VisualEditing;
	});
</script>

{#if enabled}
	{#if PreviewMode && VisualEditing}
		<PreviewMode {enabled}>
			<VisualEditing enabled={enabled && isInIframe}>
				{@render children()}
			</VisualEditing>
		</PreviewMode>
	{:else}
		Loading...
	{/if}
	<!-- 
  	Preview mode overlay 
	-->
	<div
		class="fixed right-4 bottom-4 z-nav flex items-center justify-center gap-2 rounded-full bg-[#ffcc5a] p-2 px-4 text-[16px] text-black"
	>
		{#if isInIframe}
			Previewing Drafts
		{:else}
			<!-- 
				When not in iframe show link and close button 
			-->
			<a href={presentationLink} class="hover:underline">Previewing Drafts</a>
			<a href="/preview/disable" aria-label="exit draft mode">
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
		{/if}
	</div>
{:else}
	{@render children()}
{/if}
