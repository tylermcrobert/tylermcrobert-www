import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

const S = {};

const nav = css`
  position: fixed;
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 100;
  padding: .25em .5em;
`;

S.DesktopNav = styled.nav`
  ${nav}
`;

S.MobileNav = styled.nav`
  ${nav}
  transition: 400ms transform ease;
  ${props => props.open && css`
    transform: translate3d(calc(-100% + 3.5em), 0%, 0);
  `}
`;

const margin = css`
  margin: .25em .5em;
`;

export const NavItem = styled.div`
  ${margin}
`;

S.Logo = styled(Link)`
  flex: 1;
  ${margin}
`;

export default S;
