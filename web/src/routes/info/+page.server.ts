import getNowPlaying from '$lib/last.fm/+lastfm.js';

export const load = async () => {
	const nowPlaying = await getNowPlaying();

	return {
		nowPlaying
	};
};
