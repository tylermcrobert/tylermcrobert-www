import { createContext } from 'svelte';

import type { NowPlayingData } from '$lib/nowplaying';

export const [getNowPlayingContext, setNowPlayingContext] = createContext<{
	current: NowPlayingData | null;
}>();
