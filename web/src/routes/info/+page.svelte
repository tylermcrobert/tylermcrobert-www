<script lang="ts">
	import DotHead from '$components/DotHead.svelte';
	import Link from '$components/Link.svelte';
	import NowPlayingRag from '$components/NowPlayingRag.svelte';
	import { NUMS } from '$constants';
	import { formatTime } from '$util/msToTime';

	let { data } = $props();
	let { bio, clients, playlists, links } = $derived(data.infoPage);
	let { nowPlaying } = $derived(data);
</script>

<section class="my-large">
	<div class="wrapper my-medium">
		<h2><DotHead>Bio</DotHead></h2>
		<h1 class="text-h1">{bio}</h1>
	</div>

	<div class="wrapper my-medium grid grid-cols-6 gap-standard">
		<ul class="col-span-6 md:col-span-3">
			{#each links as link}
				<li>
					<h3 class="inline">
						<DotHead noMarginBottom>{link.label} &rarr;</DotHead>
					</h3>

					{#if link.link}
						<Link link={link.link} class="underline" />
					{/if}
				</li>
			{/each}
		</ul>

		{#if clients?.length}
			<div class="col-span-6 md:col-span-3">
				<h2><DotHead>Clients</DotHead></h2>

				<ul class="columns-2 gap-standard">
					{#each clients as client}<li>{client}</li>{/each}
				</ul>
			</div>
		{/if}
	</div>
</section>

<hr />

<section class="my-large">
	{#if nowPlaying}
		<div class="wrapper my-medium">
			<h2>
				<DotHead>Recently Played</DotHead>
			</h2>
			<h3 class="text-h1">
				<NowPlayingRag {nowPlaying} />
			</h3>
		</div>
	{/if}

	<div class="wrapper my-medium">
		<h2><DotHead>Featured playlists</DotHead></h2>

		<ul class="mb-4 leading-[1.3]">
			{#each playlists || [] as { link, title, duration, date }, i}
				<li>
					<a
						href={link}
						target="_blank"
						class="flex grid-cols-6 justify-between gap-standard md:grid"
					>
						<div class="col-span-4 flex gap-2 md:col-span-2">
							<span>{NUMS[i + 1]}</span>
							<h3 class="max-w-[18ch]">{title}</h3>
						</div>
						<p class="col-span-2 hidden md:block">{date}</p>
						<p class="col-span-2 flex justify-between gap-standard">
							{formatTime(duration || 0, 'hh:mm:ss')}<span>&rarr;</span>
						</p>
					</a>
				</li>
			{/each}
		</ul>

		<a href="/playlists" class="underline">See all playlists &rarr;</a>
	</div>
</section>
