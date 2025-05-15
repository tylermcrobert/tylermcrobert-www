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
					{#each tracks as { title: rawTitle, image }}
						{@const title = rawTitle || ''}

						{#each title.split(' ') as word, i}
							{@const isFirstWord = i === 0}
							{@const isLastWord = i === title.split(' ').length - 1}
							{@const isOneWord = title.split(' ').length === 1}

							{#if isFirstWord}
								<div
									class={[
										'inline-flex items-baseline',
										isOneWord && 'mr-[0.3em]'
									]}
								>
									<img
										src={image}
										alt=""
										class="mr-[0.25em] block h-[.85em] w-[.85em]"
									/>{word}
								</div>
							{:else}
								<span class={[isLastWord && 'mr-[0.3em]']}>{' '}{word}</span>
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
