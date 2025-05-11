<script lang="ts">
	import { NUMS } from '$constants';
	import { DotHead, Link } from '$components';
	import { formatTime } from '$util/msToTime';

	import { nowPlaying } from '$lib/state';

	let { data } = $props();
	let { bio, clients, playlists, links } = $derived(data.infoPage);
</script>

<section class="my-large">
	<div class="wrapper my-medium">
		<h2><DotHead>Bio</DotHead></h2>
		<h1 class="text-h1">{bio}</h1>
	</div>

	<div class="wrapper my-medium gap-standard grid grid-cols-6">
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

				<ul class="gap-standard columns-2">
					{#each clients as client}<li>{client}</li>{/each}
				</ul>
			</div>
		{/if}
	</div>
</section>

<hr />

<section class="my-large">
	<div class="wrapper my-medium">
		{#if nowPlaying.data}
			{@const { trackName, artist, isPlaying } = nowPlaying.data}
			<h2>
				<DotHead>{isPlaying ? 'Now Playing' : 'Recently Played'}</DotHead>
			</h2>
			<h3 class="text-h1">
				{#if isPlaying}
					Right now I'm listening to “{trackName}” by {artist} on Spotify.
				{:else}
					The last song I listened to on Spotify was “{trackName}” by {artist}.
				{/if}
			</h3>
		{/if}
	</div>

	<div class="wrapper my-medium">
		<h2><DotHead>Featured playlists</DotHead></h2>

		<ul class="mb-4 leading-[1.3]">
			{#each playlists || [] as { link, title, duration, date }, i}
				<li>
					<a
						href={link}
						target="_blank"
						class="gap-standard flex grid-cols-6 justify-between md:grid"
					>
						<div class="col-span-4 flex gap-2 md:col-span-2">
							<span>{NUMS[i + 1]}</span>
							<h3 class="max-w-[18ch]">{title}</h3>
						</div>
						<p class="col-span-2 hidden md:block">{date}</p>
						<p class="gap-standard col-span-2 flex justify-between">
							{formatTime(duration || 0, 'hh:mm:ss')}<span>&rarr;</span>
						</p>
					</a>
				</li>
			{/each}
		</ul>

		<a href="/playlists" class="underline">See all playlists &rarr;</a>
	</div>
</section>
