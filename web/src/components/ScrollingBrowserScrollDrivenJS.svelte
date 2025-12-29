<script lang="ts">
	import { intersection } from '$lib/attachments';
	import { innerHeight } from 'svelte/reactivity/window';

	let scrollerRef = $state<HTMLElement | null>(null);
	let progress = $state(0);

	function handleScroll() {
		if (!scrollerRef) {
			throw new Error('Cant find scroller ref');
		}
		const rect = scrollerRef.getBoundingClientRect();
		const progressUnclamped = -rect.top / (rect.height - window.innerHeight);
		const progressClamped = Math.max(Math.min(progressUnclamped, 1), 0);
		progress = progressClamped;
	}
</script>

<svelte:window onscroll={handleScroll} />

<!-- Scroller -->
<div class="h-200 bg-green-200"></div>
<div bind:this={scrollerRef} class="bg-purple-200" style:--progress={progress}>
	<!-- Frame -->
	<div class="sticky top-0 w-full bg-black p-[10vh] text-white">
		{progress}
		<!-- Aspect clip -->
		<div class="img-container aspect-video overflow-hidden bg-white">
			<img src="/browser-1.webp" class="max-w-full" alt="" />
		</div>
	</div>
	{#each Array(100)}
		<div>Text</div>
	{/each}
</div>
<div class="h-200 bg-red-200"></div>

<style>
	.img-container {
		container-type: size;
		--scroll-distance: calc(100cqh - 100%);
	}

	img {
		transform: translateY(calc(var(--scroll-distance) * var(--progress)));
	}
</style>
