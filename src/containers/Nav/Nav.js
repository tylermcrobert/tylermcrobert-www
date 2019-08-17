import React, { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { withRouter, Link } from 'react-router-dom';
import useNowPlaying from 'hooks/useNowPlaying';
import useClickAway from './hooks/useClickAway';
import useIsPhone from './hooks/useIsPhone';
import Styled, { NavItem } from './styled';

export const NavContext = React.createContext();

function Nav({ location }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const isPhone = useIsPhone();
  const { emoji, loaded, song, artist } = useNowPlaying();
  useClickAway({ open, setOpen });

  return (
    <NavContext.Provider
      value={{
        open,
        setOpen,
        isPhone,
        emoji,
        loaded,
        song,
        artist,
        toggleOpen,
      }}
    >
      <ThemeProvider theme={{ open, hasEmoji: !!emoji }}>
        <ResponsiveNav>
          <Styled.Logo to={{ pathname: '/', search: location.search }}>
            Tyler McRobert
          </Styled.Logo>
          <NavItem>
            <Link to="/info">info</Link>
          </NavItem>
        </ResponsiveNav>
      </ThemeProvider>
    </NavContext.Provider>
  );
}

function ResponsiveNav({ children }) {
  const { open, isPhone } = useContext(NavContext);
  if (!isPhone) {
    return (
      <Styled.DesktopNav>
        {children}
        <Emoji />
        <Styled.DesktopDrawer pose={open ? 'open' : 'close'}>
          <SongInfo />
        </Styled.DesktopDrawer>
      </Styled.DesktopNav>
    );
  }
  return (
    <Styled.MobileNav open={open}>
      <Styled.MobileNavWrapper>
        <Styled.HideOnOpen>{children}</Styled.HideOnOpen>
        <Emoji />
      </Styled.MobileNavWrapper>
      <Styled.MobileSongInfoWrapper>
        <SongInfo />
      </Styled.MobileSongInfoWrapper>
    </Styled.MobileNav>
  );
}

function Emoji() {
  const { emoji, toggleOpen } = useContext(NavContext);
  return (
    <NavItem onClick={toggleOpen}>
      <Styled.Emoji>{emoji || <VinylIcon />}</Styled.Emoji>
    </NavItem>
  );
}

function SongInfo() {
  const { artist, song, toggleOpen } = useContext(NavContext);
  return (
    <Styled.SongInfo onClick={toggleOpen}>
      {artist} — {song}
    </Styled.SongInfo>
  );
}

const VinylIcon = () => (
  <svg
    width="27"
    height="27"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth="1.5"
    fill="none"
    stroke="white"
  >
    <circle cx="14" cy="14" r="11.5" />
    <circle cx="14" cy="14" r="4" />
    <circle cx="14" cy="14" r=".2" />
  </svg>
);

export default withRouter(Nav);
