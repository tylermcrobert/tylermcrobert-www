import React from 'react';
import NowPlaying from 'containers/NowPlaying/NowPlaying';

const NowPlayingIcon = () => (
  <div>
    <NowPlaying render={
      ({
 loaded, song, artist, emoji,
}) => {
        if (loaded) {
          return `${emoji} ${artist} — ${song}`;
        }
        return null;
      }}
    />
  </div>
);

export default React.memo(NowPlayingIcon);
