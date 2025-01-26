<script lang="ts">
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';

	let hasLogged = $state(false);

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

			hasLogged = true;
		}
	});
</script>
