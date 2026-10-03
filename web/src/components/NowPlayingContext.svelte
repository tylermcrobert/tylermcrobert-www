<script lang="ts">
	import type { Snippet } from 'svelte';

	import { setNowPlayingContext } from '$lib/context/nowPlayingContext';
	import { fetchNowPlaying, type NowPlayingData } from '$lib/nowplaying';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();

	let nowPlaying = $state<NowPlayingData | null>(null);

	$effect(() => {
		fetchNowPlaying().then((data) => {
			nowPlaying = data;
		});
	});

	setNowPlayingContext({
		get current() {
			return nowPlaying;
		}
	});
</script>

{@render children()}
