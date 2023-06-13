<script lang="ts">
	import type { InfoQuery } from '$lib/sanity/queries';

	export let data: InfoQuery;
</script>

<h1>{data.bio}</h1>
