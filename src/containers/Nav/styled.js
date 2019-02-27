import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import posed from 'react-pose';
import { durations } from 'containers/App/styled';

const S = {};

const margin = css`
  padding: .25em .5em;
`;

export const NavItem = styled.div`
  ${margin}
`;

const transition = {
  ease: [0.4, 0.0, 0.2, 1],
  duration: durations.medium,
};
const PosedSongInfo = posed.div({
  close: {
    width: '0',
    opacity: 0,
    transition,
  },
  open: {
    width: 'auto',
    opacity: 1,
    transition,
  },
});

const nav = css`
  position: fixed;
  display: flex;
  position: fixed;
  z-index: 100;
  padding: .25em .5em;
`;

S.DesktopNav = styled.nav`
  ${nav}
  width: 100%;
`;

S.MobileNav = styled.nav`
  ${nav}
  width: 200%;
  transition: ${durations.medium}ms transform ease;
  ${props => props.theme.open && css`
    transform: translate3d(calc(-50% + 3.5em), 0%, 0);
  `}
`;


S.HideOnOpen = styled.div`
  display: flex;
  width: 100%;
  transition: ${durations.medium}ms opacity ease;

  ${props => props.theme.open && css`
    opacity: 0
  `}
`;

S.MobileNavWrapper = styled.div`
  width: calc(50% - .5em);
  display:flex
`;

S.MobileSongInfoWrapper = styled.div`
  width: calc(50% - 3em);
  transition: 300ms opacity ease;

  opacity: 0;
  ${props => props.theme.open && css`
    opacity: 1
  `}
`;

S.Logo = styled(Link)`
  flex: 1;
  ${margin}
`;

S.Emoji = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${props => props.theme.hasEmoji && css`
    margin-top: .1em;
  `}
`;

S.SongInfo = styled(NavItem)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

S.DesktopDrawer = styled(PosedSongInfo)`
  max-width: 300px;
`;

export default S;