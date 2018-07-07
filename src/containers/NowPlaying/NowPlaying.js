import React from 'react';
import styled from 'styled-components';
import songData from './songData.json';
import VinylIcon from './VinylIcon';

export default class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.songInfo = React.createRef();
  }

  state = {
    loaded: false,
    containerWidth: 330,
  }
  componentDidMount() {
    this.setNowPlaying();
  }

  componentDidUpdate() {
    window.setTimeout(() => {
      this.setNowPlaying();
    }, 15000);
  }

  setNowPlaying = () => {
    const api = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=tyler-mcrobert&api_key=1e87695de290cd017718696f211e84a4&format=json';

    window.fetch(api).then(data => data.json()).then((json) => {
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
                : item.title === album))
            : null;
          return albumMatch
            ? albumMatch.emoji
            : artistMatch.emoji;
        }
        return null;
      })();

      this.setState({
        artist, song, emoji, loaded: true,
      });
    }).catch((err) => {
      console.error(err); // eslint-disable-line no-console
      this.setState({ notFound: true });
    });
  }

  render() {
    const {
      loaded,
      emoji,
      song,
      artist,
      notFound,
    } = this.state;
    const { nowPlayingIsOpen, containerWidth } = this.props;

    if (loaded) {
      return (
        <NowPlayingWrapper
          onClick={this.props.handleCollapse}
          nowPlayingIsOpen={nowPlayingIsOpen}
        >
          <div className="nowPlaying__icon">
            { emoji || <VinylIcon /> }
          </div>
          <SongInfo
            nowPlayingIsOpen={nowPlayingIsOpen}
            containerWidth={containerWidth}
          >
            <span ref={this.songInfo}>
              {song}
                —
              {artist}
            </span>
          </SongInfo>
        </NowPlayingWrapper>);
    }
    if (!notFound) {
      return <div><VinylIcon /></div>;
    }
    return null;
  }
}
const NowPlayingWrapper = styled.div`
  display: flex;
  transition: 400ms all ease;
  `;

const SongInfo = styled.div`
  overflow:hidden;
  transition: 400ms all ease;
  /* Hide song info when collapsed */
  opacity: ${props => (props.nowPlayingIsOpen ? '1' : '0')}


  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    padding-left: 0.61805em;
    width: calc(100vh - 2em);

    @media (min-width: 599px) {
      width: ${props => (props.containerWidth)};
    }
  }
`;
