import React, { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { withRouter } from 'react-router-dom';
import useNowPlaying from 'hooks/useNowPlaying';
import useClickAway from './hooks/useClickAway';
import useIsPhone from './hooks/useIsPhone';
import S, { NavItem } from './styled';

export const NavContext = React.createContext();

function Nav({ location }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const isPhone = useIsPhone();
  const {
    emoji, loaded, song, artist,
  } = useNowPlaying();
  useClickAway({ open, setOpen });

  return (
    <NavContext.Provider value={{
     open, setOpen, isPhone, emoji, loaded, song, artist, toggleOpen,
    }}
    >
      <ThemeProvider theme={{ open, hasEmoji: !(!emoji) }}>
        <ResponsiveNav>
          <S.Logo to={{ pathname: '/', search: location.search }}>Tyler McRobert</S.Logo>
          <NavItem>info</NavItem>
        </ResponsiveNav>
      </ThemeProvider>
    </NavContext.Provider>
  );
}

function ResponsiveNav({ children }) {
  const {
    open, isPhone,
  } = useContext(NavContext);
  if (!isPhone) {
    return (
      <S.DesktopNav>
        {children}
        <Emoji />
        <S.DesktopDrawer pose={open ? 'open' : 'close'}>
          <SongInfo />
        </S.DesktopDrawer>
      </S.DesktopNav>
    );
  }
  return (
    <S.MobileNav open={open}>
      <S.MobileNavWrapper>
        <S.HideOnOpen>
          {children}
        </S.HideOnOpen>
        <Emoji />
      </S.MobileNavWrapper>
      <S.MobileSongInfoWrapper>
        <SongInfo />
      </S.MobileSongInfoWrapper>
    </S.MobileNav>
  );
}

function Emoji() {
  const { emoji, toggleOpen } = useContext(NavContext);
  return (
    <NavItem onClick={toggleOpen}>
      <S.Emoji>{emoji || <VinylIcon />}</S.Emoji>
    </NavItem>
  );
}

function SongInfo() {
  const { artist, song, toggleOpen } = useContext(NavContext);
  return (
    <S.SongInfo onClick={toggleOpen}>
      {artist} — {song}
    </S.SongInfo>
  );
}

const VinylIcon = () => (
  <svg width="27" height="27" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" fill="none" stroke="white" >
    <circle cx="14" cy="14" r="11.5" />
    <circle cx="14" cy="14" r="4" />
    <circle cx="14" cy="14" r=".2" />
  </svg>
);

export default withRouter(Nav);
