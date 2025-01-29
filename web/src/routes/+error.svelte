<script lang="ts">
	import { page } from '$app/state';
</script>

<div
	class="flex min-h-[calc(100dvh-theme(space.nav-height))] items-center justify-evenly"
>
	<p>{page.status}</p>
	<p>{page.error?.message}</p>
</div>
