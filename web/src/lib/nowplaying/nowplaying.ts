const endpoint = 'https://nowplaying.tylermcrobert.com/api/apple-music';

export type NowPlayingData = {
	trackName: string;
	artist: string;
	isPlaying: boolean;
};

export async function fetchNowPlaying(): Promise<NowPlayingData> {
	try {
		const req = await fetch(endpoint);
		const data = await req.json();

		if (!req.ok) {
			throw new Error('Failed to fetch now playing');
		}

		return {
			trackName: data.track,
			artist: data.artist,
			isPlaying: false // Apple doesn't provide this information
		};
	} catch (error) {
		console.error('Error fetching now playing', error);
		throw new Error('Failed to fetch now playing');
	}
}
