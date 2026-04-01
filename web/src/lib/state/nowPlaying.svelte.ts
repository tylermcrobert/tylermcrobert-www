import type { NowPlayingData } from '$lib/nowplaying/nowPlaying';

export const nowPlaying = $state<{ data: NowPlayingData | null }>({
	data: null
});

export const setNowPlaying = (data: NowPlayingData) => {
	nowPlaying.data = data;
};
