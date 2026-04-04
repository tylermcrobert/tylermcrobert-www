<script lang="ts">
	import type { NowPlayingData } from '$lib/nowplaying';

	type Props = {
		nowPlaying: NowPlayingData;
	};

	let { nowPlaying }: Props = $props();

	function separateFirstWords(text: string, limit: number = 10): string[] {
		if (text.length <= limit) return [text];

		const lastSpace = text.lastIndexOf(' ', limit);
		const splitAt = lastSpace > 0 ? lastSpace : text.indexOf(' ');

		if (splitAt === -1) return [text];

		const first = text.slice(0, splitAt);
		const rest = text.slice(splitAt + 1);
		return rest ? [first, rest] : [first];
	}
</script>

<span>The last song I listened to was </span>
{#each separateFirstWords(nowPlaying.trackName) as part, i}
	{#if i === 0}
		<span class="text-nowrap">
			<img
				src={nowPlaying.artwork.replace('{w}', '300').replace('{h}', '300')}
				alt="Apple Music"
				class="relative -top-[0.085em] left-[0.05em] inline-block size-[0.85em] object-cover"
			/>
			{part}
		</span>
	{:else}
		<span>{` ${part}`}</span>
	{/if}
{/each}
by {nowPlaying.artist} on Apple&nbsp;Music.
