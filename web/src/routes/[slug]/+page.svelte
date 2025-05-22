<script lang="ts">
	import { Modules } from '$components';

	let { data } = $props();
</script>

<Modules
	modules={data.modules}
	documentId={data._id}
	documentType={data._type}
/>
