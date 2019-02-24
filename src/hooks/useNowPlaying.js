import { useEffect, useState } from 'react';
import emojis from './emojis.json';

const api = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=tyler-mcrobert&api_key=1e87695de290cd017718696f211e84a4&format=json';


function parseData(data) {
  const trackData = data.recenttracks.track[0];
  const album = trackData.album['#text'];
  const artist = trackData.artist['#text'];
  const song = trackData.name;
  const emoji = (() => {
    const artistMatch = emojis.artists.find(item => item.name === artist);
    if (artistMatch) {
      const albumMatch = (artistMatch.albums) // returns album object or null
        ? artistMatch.albums.find(item => (
          (!item.exact) // handle remasters / anniversaries / deluxe
            ? album.startsWith(item.title)
            : item.title === album))
        : null;
      return albumMatch
        ? albumMatch.emoji
        : artistMatch.emoji;
    }
    return null;
  })();

  return {
    album,
    artist,
    song,
    emoji,
  };
}


export default function useNowPlaying(interval = 15000) {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const fetchData = () => {
    window.fetch(api).then(res => res.json()).then((json) => {
      setData(parseData(json));
      setLoaded(true);
    }).catch((err) => {
      console.error(err); // eslint-disable-line no-console
    });
  };

  useEffect(() => {
    fetchData();

    const repeat = setInterval(() => {
      fetchData();
    }, interval);

    return () => {
      clearInterval(repeat);
    };
  }, []);

  return { loaded, ...data };
}
