const endpoint =
  'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=tyler-mcrobert&api_key=1e87695de290cd017718696f211e84a4&format=json';

export type NowPlayingData = {
  trackName: string;
  artist: string;
  nowPlaying: boolean;
};

export default async function getNowPlaying(): Promise<NowPlayingData> {
  const req = await fetch(endpoint);
  const data = await req.json();
  const track = data.recenttracks.track[0];

  return {
    trackName: track.name,
    artist: track.artist['#text'],
    nowPlaying: track['@attr']?.nowplaying === 'true' || false
  };
}
