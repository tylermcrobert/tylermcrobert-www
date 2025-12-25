<script>
	const ASPECT = 8192 / 1429;
</script>

<div class="bg-black px-20">
	<!-- Contained -->
	<div
		class="parent relative h-(--total-height) bg-green-500"
		style:--image-aspect={ASPECT}
	>
		<!-- Sticky -->
		<div
			class="sticky top-0 grid h-lvh items-center justify-center bg-orange-200"
		>
			<!-- video clipped -->
			<div class="aspect-video w-full overflow-hidden">
				<img src="/browser-1.webp" class="max-w-full" alt="" />
			</div>
		</div>
	</div>
</div>

<style>
	.parent {
		container-type: inline-size;

		/* The height that the video aspect window takes up */
		--video-height: calc(100cqi * 9 / 16);

		/* The space the non-"browser" content takes up */
		--height-minus-video: calc(100lvh - var(--video-height));

		/* The height the image in the "browser" takes up */
		--image-height: calc(100cqi * var(--image-aspect));

		/* The total height of the "browser" */
		--total-height: calc(
			var(--height-minus-video) + var(--image-height) - 100lvh
		);
	}
</style>
