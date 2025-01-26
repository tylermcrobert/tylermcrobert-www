<script lang="ts">
	type Props = { locked?: boolean };

	let { locked: shouldLock = true }: Props = $props();

	$effect(() => {
		function unlockScroll() {
			document.body.classList.remove('overflow-hidden');
		}

		function lockScroll() {
			document.body.classList.add('overflow-hidden');
		}

		if (shouldLock) {
			lockScroll();
		} else {
			unlockScroll();
		}

		return () => {
			unlockScroll();
		};
	});
</script>
