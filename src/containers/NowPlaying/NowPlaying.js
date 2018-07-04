import React from 'react';
import styled from 'styled-components';
import songData from './songData.json';

const NowPlayingWrapper = styled.div`
  display: flex;
`;

export default class NowPlaying extends React.Component {
  state = {
    loaded: false,
  }
  componentDidMount() {
    this.setNowPlaying();
  }

  setNowPlaying = () => {
    const api = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=tyler-mcrobert&api_key=${process.env.REACT_APP_LAST_FM_KEY}&format=json`;
    window.fetch(api)
      .then(data => data.json())
      .then((json) => {
        const trackData = json.recenttracks.track[0];
        const album = trackData.album['#text'];
        const artist = trackData.artist['#text'];
        const song = trackData.name;
        const emoji = (() => {
          const artistMatch = songData.artists.find(item => item.name === artist);
          if (artistMatch) {
            const albumMatch = (artistMatch.albums) // returns album object or null
              ? artistMatch.albums.find(item => (
                (!item.exact) // handle remasters / anniversaries / deluxe
                  ? album.startsWith(item.title)
                  : item.title === album
              ))
              : null;
            return albumMatch ? albumMatch.emoji : artistMatch.emoji;
          }
          return null;
        })();

        this.setState({
          artist, song, emoji, loaded: true,
        });
      })
      .catch((err) => {
        console.error(err); // eslint-disable-line no-console
        this.setState({ notFound: true });
      });
  }

  handleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const {
      loaded,
      emoji,
      song,
      artist,
      notFound,
    } = this.state;

    if (loaded) {
      return (
        <NowPlayingWrapper onClick={this.handleCollapse} className="NowPlaying">
          <div
            className="nowPlaying__icon"
          >
            {emoji}
          </div>
          <div
            className="nowPlaying__content"
            ref={this.songInfo}
          >
            {song} — {artist}
          </div>
        </NowPlayingWrapper>
      );
    }
    if (!notFound) {
      return <div>{emoji}</div>;
    }
    return null;
  }
}
