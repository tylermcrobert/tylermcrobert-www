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
      <SongInfo onClick={toggleDrawer} className={style.nowPlaying} pose={drawerOpened ? 'open' : 'close'}>
        <div className={style.emoji}>{emoji}</div>
        <div className={style.songInfo}>
          {artist} — {song}
        </div>
      </SongInfo>
    );
  }
  return null;
};

const SongInfo = posed.div({
  open: { x: '0%' },
  close: { x: '100%' },
});
