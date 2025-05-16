<script>
	import ModulePlaylistBlock from '$components/Modules/ModulePlaylistBlock.svelte';

	let { data } = $props();
</script>

<div class="wrapper my-large mx-auto">
	<ModulePlaylistBlock data={{ ...data, _type: 'playlistBlock' }} showAll />
	<a href="/playlists">See All &rarr;</a>
</div>
