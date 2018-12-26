import React from 'react';
import posed from 'react-pose';
import NowPlaying from 'containers/NowPlaying/NowPlaying';
import style from './NowPlayingIcon.module.css';

export default class NowPlayingIcon extends React.Component {
  state = {
    drawerOpened: false,
  }

  toggleDrawer = () => {
    this.setState({ drawerOpened: !this.state.drawerOpened });
  }
  render() {
    const { drawerOpened } = this.state;
    return (
      <NowPlaying render={props => (
        <Drawer drawerOpened={drawerOpened} toggleDrawer={this.toggleDrawer} {...props} />
        )}
      />
    );
  }
}

const Drawer = ({
  loaded, artist, song, emoji, drawerOpened, toggleDrawer,
}) => {
  if (loaded) {
    return (
      <div className={style.nowPlaying} onClick={toggleDrawer}>
        <div className={style.emoji}>{emoji}</div>
        <SongInfo
          pose={drawerOpened ? 'open' : 'close'}
          className={style.songInfo}
        >
          {artist} — {song}
        </SongInfo>
      </div>
    );
  }
  return null;
};

const SongInfo = posed.div({
  open: {
    width: 'auto',
    opacity: 1,
    marginLeft: '1em',
    transition: { ease: [0.4, 0.0, 0.2, 1] },
  },
  close: {
    width: '0',
    opacity: 0,
    marginLeft: '0em',
    transition: { ease: [0.4, 0.0, 0.2, 1] },
  },
});
