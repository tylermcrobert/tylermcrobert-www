<div class="h-[2000px] bg-purple-200">
	<div class="sticky top-0 w-full bg-black p-[10vh]">
		<div class="img-container aspect-video overflow-hidden bg-white">
			<img src="/browser-1.webp" class="max-w-full" alt="" />
		</div>
	</div>
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
		animation: 8s slide infinite;
	}
</style>
