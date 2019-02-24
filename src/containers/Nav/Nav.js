import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import useNowPlaying from 'hooks/useNowPlaying';
import useIsPhone from './hooks/useIsPhone';
import NowPlaying from './NowPlaying/NowPlaying';
import S, { NavItem } from './styled';

export const NavContext = React.createContext();

function Nav({ location }) {
  const [open, setOpen] = useState(false);
  const isPhone = useIsPhone();
  const {
    emoji, loaded, song, artist,
  } = useNowPlaying();

  return (
    <NavContext.Provider value={{
     open, setOpen, isPhone, emoji, loaded, song, artist,
    }}
    >
      <ResponsiveNav>
        <S.Logo to={{ pathname: '/', search: location.search }}>Tyler McRobert</S.Logo>
        <NavItem>info</NavItem>
        <NowPlaying />
      </ResponsiveNav>
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
      </S.DesktopNav>
    );
  }
  return (
    <S.MobileNav open={open}>
      {children}
    </S.MobileNav>
  );
}

export default withRouter(Nav);
