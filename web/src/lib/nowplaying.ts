const endpoint = 'https://nowplaying.tylermcrobert.com/api/apple-music';

export type NowPlayingData = {
	trackName: string;
	artist: string;
	isPlaying: boolean;
	artwork: string;
};

export async function fetchNowPlaying(): Promise<NowPlayingData | null> {
	try {
		const req = await fetch(endpoint);
		const data = await req.json();

		if (!req.ok) {
			throw new Error('Failed to fetch now playing');
		}

		return {
			trackName: data.track,
			artist: data.artist,
			artwork: data.artwork,
			isPlaying: false // Apple doesn't provide this information
		};
	} catch (error) {
		console.error('Error fetching now playing', error);
		return null;
	}
}
