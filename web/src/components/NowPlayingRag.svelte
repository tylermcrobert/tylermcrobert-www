<script lang="ts">
	import type { NowPlayingData } from '$lib/nowplaying';

	type Props = {
		nowPlaying: NowPlayingData;
	};

	let { nowPlaying }: Props = $props();

	const MAX_FIRST_SEGMENT = 12;

	function splitTextForRag(text: string): string[] {
		const firstPart = text.slice(0, MAX_FIRST_SEGMENT);
		const firstPartSpaces = firstPart.match(/ /g)?.length ?? 0;

		const word = text.split(' ').filter(Boolean);
		const firstWords = word.slice(0, firstPartSpaces + 1);
		const restWords = word.slice(firstPartSpaces + 1);

		return [firstWords.join(' '), restWords.join(' ')];
	}
</script>

<span>The last song I listened to was </span>
{#each splitTextForRag(nowPlaying.trackName) as part, i}
	{#if i === 0}
		<span class="border text-nowrap">
			<img
				src={nowPlaying.artwork.replace('{w}', '300').replace('{h}', '300')}
				alt="Apple Music"
				class="relative -top-[0.1em] left-[0.1em] inline-block size-[0.75em] object-cover"
			/>
			{part}</span
		>
	{:else}
		<span>{` ${part}`}</span>
	{/if}
{/each}
by {nowPlaying.artist} on Apple&nbsp;Music.
