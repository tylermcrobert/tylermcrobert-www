import React, { useState } from 'react';
import useNowPlaying from 'hooks/useNowPlaying';
import VinylIcon from './VinylIcon';
import S from './style';

const NowPlaying = () => {
  const [open, setOpen] = useState(false);
  const {
    emoji, loaded, song, artist,
  } = useNowPlaying();

  if (loaded) {
    return (
      <S.NowPlaying onClick={() => setOpen(!open)}>
        <S.Emoji>{emoji || <VinylIcon />}</S.Emoji>
        <S.SongInfo
          pose={open ? 'open' : 'close'}
        >
          {artist} — {song}
        </S.SongInfo>
      </S.NowPlaying>
    );
  }
  return null;
};

export default NowPlaying;
