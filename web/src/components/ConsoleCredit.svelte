<script lang="ts">
	import { onMount } from 'svelte';

	import { dev } from '$app/environment';

	onMount(() => {
		if (!dev) {
			const msg = `%c
Built by Tyler McRobert
%ctylermcrobert.com
    `;

			console.log(
				msg,
				'font-weight: bold; text-transform: uppercase; line-height:1;',
				'font-weight: normal; color: gray'
			);
		}
	});
</script>
