<script>
	const ASPECT = 8192 / 1429;
</script>

<div class="bg-black px-20">
	<div class="parent relative bg-green-500" style:--image-aspect={ASPECT}>
		<div class="height-test absolute z-10 w-full bg-red-500">asdf</div>
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
		--image-height: calc(100cqi * var(--image-aspect));
		--height-minus-video: calc(100lvh - var(--video-height));
		--total-height: calc(var(--height-minus-video) + var(--image-height));
	}

	.height-test {
		height: var(--total-height);
	}

	.shim {
		height: calc(var(--height-minus-video) / 2);
	}
</style>
