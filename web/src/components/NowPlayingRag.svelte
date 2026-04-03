<script lang="ts">
	import type { NowPlayingData } from '$lib/nowplaying';

	type Props = {
		nowPlaying: NowPlayingData;
	};

	let { nowPlaying }: Props = $props();

	const MAX_FIRST_SEGMENT = 10;

	function splitTextForRag(text: string): string[] {
		const words = text.trim().split(/\s+/).filter(Boolean);
		if (words.length <= 1) return words;

		let first = words[0]!;
		let endFirst = 0;

		for (let i = 1; i < words.length; i++) {
			const next = `${first} ${words[i]}`;
			if (next.length > MAX_FIRST_SEGMENT) break;
			first = next;
			endFirst = i;
		}

		if (endFirst === words.length - 1) return [first];
		return [first, words.slice(endFirst + 1).join(' ')];
	}
</script>

<span>The last song I listened to was</span>

{#each splitTextForRag(nowPlaying.trackName) as part, i}
	{#if i === 0}
		<span class="border text-nowrap">
			<img
				src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e7/41/d8/e741d8f3-f8db-d401-5d93-fdfd69d8f17e/196873835891.jpg/200x200bb.jpg"
				alt="Apple Music"
				class="relative -top-[0.1em] left-[0.1em] inline-block size-[0.8em] object-cover"
			/>
			{part}</span
		>
	{:else}
		<span>{` ${part}`}</span>
	{/if}
{/each}
by {nowPlaying.artist} on Apple&nbsp;Music.
