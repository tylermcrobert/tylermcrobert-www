import React, { useContext } from 'react';
import VinylIcon from './VinylIcon';
import { NavContext } from '../Nav';
import S from './style';
import { NavItem } from '../styled';

const NowPlaying = () => {
  const {
    open, setOpen, isPhone, emoji, loaded, song, artist,
  } = useContext(NavContext);

  if (loaded) {
    return (
      <S.NowPlaying onClick={() => setOpen(!open)}>
        <NavItem>
          <S.Emoji>{emoji || <VinylIcon />}</S.Emoji>
        </NavItem>
        {!isPhone ?
          <S.SongInfo pose={open ? 'open' : 'close'} >
            <div>{artist} — {song}</div>
          </S.SongInfo>
          :
          <S.MobileSongInfo open={open}>
            <NavItem>
              {artist} — {song}
            </NavItem>
          </S.MobileSongInfo>
        }
      </S.NowPlaying>
    );
  }
  return null;
};

export default NowPlaying;
