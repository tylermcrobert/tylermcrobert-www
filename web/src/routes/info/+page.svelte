<script lang="ts">
	import type { InfoQuery } from '$lib/sanity/queries';
	import { EMAIL, LINK_EMAIL, LINK_IG, NUMS, IG, CLIENTS } from '../../constants';

	export let data: InfoQuery;
</script>

<h1>{data.bio}</h1>

<section>
	<div>
		<h2>E-M &rarr;</h2>
		<a href={LINK_EMAIL}>{EMAIL}</a>
	</div>
	<div>
		<h2>IG &rarr;</h2>
		<a href={LINK_IG}>{IG}</a>
	</div>
</section>

<section>
	<h2>Clients</h2>
	<ul>
		{#each CLIENTS as client}
			<li>{client}</li>
		{/each}
	</ul>
</section>

<section>
	<h2>Now Playing</h2>
	<h3>Right now I'm playing...</h3>
</section>

<section>
	<h2>Playlists</h2>
	<ul>
		{#each data.playlists as { slug, title }, i}
			<li>
				<a href={`/playlists/${slug}`}>
					{NUMS[i]}
					<p>{title}</p>
					<span>&rarr;</span>
				</a>
			</li>
		{/each}
	</ul>
	<a href="/playlists">See all playlists &rarr;</a>
</section>
