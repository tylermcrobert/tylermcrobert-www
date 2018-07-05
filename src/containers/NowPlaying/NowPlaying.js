import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import songData from './songData.json';
import VinylIcon from './VinylIcon';

const MOBILE_WIDTH = 599;

export default class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.songInfo = React.createRef();
    this.setState({ isMobile: window.matchMedia(`(min-width:${MOBILE_WIDTH})`).matches === true });
  }

  state = {
    loaded: false,
    wordWidth: 0,
    isCollapsed: true,
    isMobile: false,
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


  handleCollapse = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
      wordWidth: this.songInfo.current.getBoundingClientRect().width,
    });
  }

  render() {
    const {
      loaded, emoji, song, artist, notFound, isCollapsed, wordWidth, isMobile,
    } = this.state;

    if (loaded) {
      return (
        <NowPlayingWrapper onClick={this.handleCollapse} className="NowPlaying">
          <div className="nowPlaying__icon">
            { emoji || <VinylIcon /> }
          </div>
          <PosedSongInfo
            isCollapsed={isCollapsed}
            isMobile={isMobile}
            wordWidth={wordWidth}
            pose={isCollapsed ? 'closed' : 'open'}
          >
            <span ref={this.songInfo}>
              {song}
                —
              {artist}
            </span>
          </PosedSongInfo>
        </NowPlayingWrapper>);
    }
    if (!notFound) {
      return <div><VinylIcon /></div>;
    }
    return null;
  }
}
const NowPlayingWrapper = styled.div`display: flex;`;

const SongInfo = styled.div`
  overflow:hidden;
  padding-left: ${props => (props.isCollapsed ? '0em' : '1em')};

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display ${props => (props.isCollapsed ? 'auto' : 'block')};
  }
`;

const slideOpenAnimation = {
  open: {
    opacity: 1,
    width: ({ wordWidth, isMobile }) => {
      const MAX_WIDTH = 500;
      const containerWidth = wordWidth > MAX_WIDTH ? MAX_WIDTH : wordWidth;
      if (!isMobile) {
        return ((containerWidth < 0) ? 0 : containerWidth);
      }
      return window.innerWidth;
    },
  },
  closed: {
    opacity: 0,
    width: 0,
  },
};

const PosedSongInfo = posed(SongInfo)(slideOpenAnimation);
