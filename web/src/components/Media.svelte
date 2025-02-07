<script lang="ts">
	import type { MediaProjection } from '$sanity';
	import { Video, Image } from '$components';

	type Props = {
		data: MediaProjection;
		sizes: string;
		class?: string;
		priority?: boolean;
		videoElement?: HTMLVideoElement;
		imageAspect?: number | undefined;
		alt: string | null;
	};

	let {
		data,
		alt,
		class: className = 'w-full',
		sizes,
		priority,
		imageAspect
	}: Props = $props();
</script>

{#if data?.video}
	<Video video={data.video} class={className} />
{:else if data?.oldVideoFile}
	<div class="bg-pink-500">
		<a
			href={data.oldVideoFile}
			download={data.oldVideoFile}
			aria-label="Download video"
		>
			<video autoplay muted src={data.oldVideoFile} class="w-full opacity-30"
			></video>
		</a>
	</div>
{:else if data?.image}
	<Image
		image={data.image}
		{alt}
		class={className}
		{sizes}
		{priority}
		aspect={imageAspect}
	/>
{/if}
