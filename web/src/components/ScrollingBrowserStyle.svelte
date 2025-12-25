<script>
	const ASPECT = 100 / 400;
</script>

<div class="bg-black px-20">
	<div class="parent relative bg-green-500" style:--image-aspect={ASPECT}>
		<div
			class="sticky top-0 flex w-full items-center justify-center bg-red-500/50"
		>
			<div class="w-full bg-blue-500 py-[calc(var(--height-minus-video)/2)]">
				<img src="/browser-1.webp" alt="" />
			</div>
		</div>
	</div>
</div>

<style>
	.parent {
		container-type: inline-size;
		--video-height: calc(100cqi * 9 / 16);
		--height-minus-video: calc(100lvh - var(--video-height));
	}

	.shim {
		height: calc(var(--height-minus-video) / 2);
	}
</style>
