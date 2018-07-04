import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import NowPlaying from '../../containers/NowPlaying/NowPlaying';

const NavWrapper = styled.nav`
  position:fixed;
  z-index: 10;
`;

const Nav = () => (
  <NavWrapper>
    <Link to="/">Tyler McRobert</Link>
    <NowPlaying />
  </NavWrapper>
);
export default Nav;
