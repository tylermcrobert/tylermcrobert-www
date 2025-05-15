<script lang="ts">
	import { DotHead } from '$components';
	import { NUMS } from '$constants';
	import type {
		ModulePlaylistBlock,
		Playlist,
		PlaylistBlockTrack
	} from '$sanity';
	import { formatTime } from '$util/msToTime';

	const LIMIT = 8;

	type Props = {
		data: ModulePlaylistBlock;
	};

	let { data }: Props = $props();

	let isExpanded = $state(false);
</script>

{#if data.playlist}
	{@const { title, link, date, duration, image, tracks } = data.playlist}

	<div class="my-large gap-standard mx-auto flex flex-col">
		<div class="text-h1 flex gap-4 text-balance">
			<img src={image} alt={title} class="size-[.85em] object-cover" />
			<h2>{title}</h2>
		</div>

		<div class="grid-standard !gap-y-1">
			<div class="col-span-6 md:col-span-2">
				<a href={link} target="_blank">
					<DotHead noMarginBottom>LINK ↗</DotHead>
				</a>
			</div>
			<div class="col-span-3 md:col-span-2">
				<DotHead noMarginBottom>{date}</DotHead>
			</div>
			<div class="col-span-3 md:col-span-2">
				<DotHead noMarginBottom>
					DUR {formatTime(duration || 0, 'hh:mm:ss')}
				</DotHead>
			</div>
		</div>

		<ul>
			{#each tracks || [] as { title, duration, artists, image }, i}
				{@const durFormatted = formatTime(duration || 0, 'mm:ss')}
				{@const artistsFormatted = artists?.join(' & ')}
				{@const hidden = i + 1 > LIMIT && !isExpanded}

				{@const firstWord = (title || '').split(' ')[0]}
				{@const restOfWords = (title || '').split(' ').slice(1).join(' ')}

				<li class={['text-h1 inline-block', hidden ? 'hidden' : '']}>
					{#each tracks as { title, image }}
						{#each (title || '').split(' ') as word, i}
							{#if i === 0}
								{' '}
								<div class="inline-flex items-baseline">
									<img
										src={image}
										alt=""
										class="mr-[0.3ch] block h-[.85em] w-[.85em]"
									/>&nbsp;{word}
								</div>
							{:else}
								<span>{' '}{word}</span>
							{/if}
						{/each}
					{/each}
				</li>
			{/each}
		</ul>

		<div>
			<button onclick={() => (isExpanded = !isExpanded)} class="cursor-pointer">
				<DotHead noMarginBottom>
					{isExpanded ? 'See Less ↑' : 'See All ↓'}
				</DotHead>
			</button>
		</div>
	</div>
{/if}
