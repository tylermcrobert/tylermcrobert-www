<script lang="ts">
	import { DotHead } from '$components';
	import { NUMS } from '$constants';
	import { formatTime } from '$util/msToTime.js';

	// TODO: Update details for mobile

	let { data } = $props();

	const LIMIT = 5;

	let activeSlug = $state<string | null>(null);

	function togglePlaylist(slug: string | null) {
		if (activeSlug === slug) {
			activeSlug = null;
		} else {
			activeSlug = slug;
		}
	}
</script>

<div class="space-y-medium my-large">
	{#each data.playlists as { title, tracks, image, date, link, duration, slug }, playlistIndex}
		{@const isActive = slug === activeSlug}

		<section class="wrapper my-medium gap-standard mx-auto flex flex-col">
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
				{#each tracks || [] as { title, duration, artists }, i}
					{@const durFormatted = formatTime(duration || 0, 'mm:ss')}
					{@const artistsFormatted = artists?.join(' & ')}
					{@const hidden = i + 1 > LIMIT && !isActive}

					<li class={['text-h1 ', hidden ? 'hidden' : 'inline']}>
						{NUMS[i + 1]}
						{title}&mdash;{artistsFormatted} ({durFormatted}){' '}
					</li>
				{/each}
			</ul>

			<div>
				<button onclick={() => togglePlaylist(slug)}>
					<DotHead noMarginBottom>
						{isActive ? 'See Less ↑' : 'See All ↓'}
					</DotHead>
				</button>
			</div>
		</section>
	{/each}
</div>
