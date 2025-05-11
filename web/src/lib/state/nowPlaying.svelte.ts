import type { NowPlayingData } from '$lib/last.fm';

export const nowPlaying = $state<{ data: NowPlayingData | null }>({
	data: null
});

export const setNowPlaying = (data: NowPlayingData) => {
	nowPlaying.data = data;
};
