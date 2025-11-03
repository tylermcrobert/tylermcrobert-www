<script>
	import ModulePlaylistBlock from '$components/Modules/ModulePlaylistBlock.svelte';

	let { data } = $props();
</script>

<div class="wrapper mx-auto my-large">
	<ModulePlaylistBlock data={{ ...data, _type: 'playlistBlock' }} showAll />
	<a href="/playlists">See All &rarr;</a>
</div>
