<script lang="ts">
	import { Modules } from '$components';

	let { data } = $props();
	let { modules, documentId, documentType } = $derived(data);
</script>

<Modules {modules} {documentId} {documentType} />
