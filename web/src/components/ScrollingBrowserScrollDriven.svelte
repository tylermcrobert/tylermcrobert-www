<!-- Scroller -->
<div class="bg-purple-200">
	<!-- Frame -->
	<div class="sticky top-0 w-full bg-black p-[10vh]">
		<!-- Aspect clip -->
		<div class="img-container aspect-video bg-white">
			<img src="/browser-1.webp" class="max-w-full" alt="" />
		</div>
	</div>
	{#each Array(100)}
		<div>Text</div>
	{/each}
</div>

<style>
	@keyframes slide {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(var(--scroll-distance));
		}
	}

	.img-container {
		container-type: size;
		--scroll-distance: calc(100cqh - 100%);
	}

	img {
		animation: linear slide forwards;
		animation-timeline: scroll();
	}
</style>
