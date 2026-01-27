<script lang="ts">
	import { stegaClean } from '@sanity/sveltekit';

	import type { Media as MediaType, MediaProjectionVideo } from '$sanity';

	import type { VideoPlaybackTrueOrUndefined, VideoProps } from './types';
	import Video from './Video.svelte';
	import {
		getMuxThumbnailUrl,
		getSanityPosterUrl,
		parseAspectStr
	} from './VideoFromProjection.util';

	interface Props extends Partial<VideoProps> {
		projection: NonNullable<MediaProjectionVideo>;
	}

	let { aspect, projection, poster, ...props }: Props = $props();

	const { playbackId, customVideoPlayback } = $derived(projection);
	const preset = $derived(stegaClean(projection.playbackSettings));

	type SchemaPreset = NonNullable<MediaType['playbackSettings']>;
	type Presets = Record<SchemaPreset, VideoPlaybackTrueOrUndefined>;

	const playbackPresets: Presets = $derived({
		controls: {
			autoplay: undefined,
			controls: true,
			muted: undefined,
			loop: undefined
		},
		autoplay: {
			autoplay: true,
			controls: undefined,
			muted: true,
			loop: true
		},
		custom: {
			autoplay: customVideoPlayback?.autoplay || undefined,
			controls: customVideoPlayback?.controls || undefined,
			muted: customVideoPlayback?.muted || undefined,
			loop: customVideoPlayback?.loop || undefined
		}
	});
</script>

<Video
	{...props}
	{...playbackPresets[preset || 'autoplay']}
	playbackId={playbackId!}
	aspect={aspect || parseAspectStr(projection.aspect!)}
	poster={poster || projection?.poster
		? getSanityPosterUrl(projection.poster, parseAspectStr(projection!.aspect!))
		: getMuxThumbnailUrl(playbackId!, 0.0)}
/>
