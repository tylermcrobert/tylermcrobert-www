<script lang="ts">
	import DotHead from '$components/DotHead.svelte';
	import { NUMS } from '$constants';
	import type { ModulePlaylistBlock } from '$sanity';
	import { censor } from '$util/censor';
	import { formatTime } from '$util/msToTime';

	const LIMIT = 5;

	type Props = {
		data: ModulePlaylistBlock;
		truncate?: boolean;
	};

	let { data, truncate = true }: Props = $props();

	let isExpanded = $state(false);
</script>

{#if data.playlist}
	{@const { title, link, date, duration, image, tracks } = data.playlist}

	<section class="mx-auto my-medium flex flex-col gap-standard">
		<div class="flex gap-4 text-h1">
			<img src={image} alt={title} class="size-[1em] object-cover" />
			<h2>{title}</h2>
		</div>

		<div class="grid-standard gap-y-1">
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
			{#each tracks || [] as { title, duration, artists }, i}
				{@const durFormatted = formatTime(duration || 0, 'mm:ss')}
				{@const artistsFormatted = (artists || []).filter(censor).join(' & ')}
				{@const hidden = i + 1 > LIMIT && !(isExpanded || !truncate)}

				<li class={['mr-[0.4ch] text-h1', hidden ? 'hidden' : 'inline']}>
					{NUMS[i + 1]}&nbsp;{censor(title!)}&mdash;{artistsFormatted} ({durFormatted})
				</li>
			{/each}
		</ul>

		{#if truncate}
			<div>
				<button
					onclick={() => (isExpanded = !isExpanded)}
					class="cursor-pointer"
				>
					<DotHead noMarginBottom>
						{isExpanded ? 'See Less ↑' : 'See All ↓'}
					</DotHead>
				</button>
			</div>
		{/if}
	</section>
{/if}
