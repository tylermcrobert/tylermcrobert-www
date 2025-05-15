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

	<div class="my-medium gap-standard mx-auto flex flex-col">
		<div class="text-h1 flex gap-4">
			<img src={image} alt={title} class="size-[1em] object-cover" />
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

				<li class={['text-h1 ', hidden ? 'hidden' : 'inline']}>
					<span class="inline-flex items-baseline">
						{#if image}
							{@render AlbumCover(image)}&nbsp;{firstWord}
						{/if}
					</span>{' '}<span class="pr-4">{restOfWords}</span>
				</li>

				<!-- 				

				<li class={['text-h1 ', hidden ? 'hidden' : 'inline']}>
					{#each (title || '').split(' ') as word, i}
						{#if i === 0}
							{' '}
							<div class="inline-flex items-baseline">
								{@render AlbumCover(image)}&nbsp;{word}
							</div>
						{:else}
							<span>{' '}{word} </span>
						{/if}
					{/each}
					– {artistsFormatted}
				</li> -->
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

{#snippet AlbumCover(image: string)}
	<div
		class="h-6 w-6 md:h-8 md:w-8 lg:h-11 lg:w-11 xl:h-[calc(1.75rem+1vw)] xl:w-[calc(1.75rem+1vw)]"
	>
		<img
			src={image}
			alt=""
			class="h-6 w-6 md:h-8 md:w-8 lg:h-11 lg:w-11 xl:h-[calc(1.75rem+1vw)] xl:w-[calc(1.75rem+1vw)]"
		/>
	</div>
{/snippet}
