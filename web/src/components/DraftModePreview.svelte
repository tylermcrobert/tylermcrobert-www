<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.data.isDraftMode}
	<div
		class="bottom-standard right-standard fixed flex items-center justify-center gap-2 rounded-full bg-[#ffcc5a] p-2 px-4"
	>
		<span>Previewing Drafts</span>
		<a href="/api/draft/disable">
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
	</div>
{/if}
