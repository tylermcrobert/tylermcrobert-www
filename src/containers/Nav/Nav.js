import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import NowPlayingIcon from './NowPlayingIcon/NowPlayingIcon';

const Nav = () => (
  <Styled.Nav>
    <Styled.Logo to="/">Tyler McRobert</Styled.Logo>
    <div>info</div>
    <NowPlayingIcon />
  </Styled.Nav>
);

const Styled = {};

Styled.Nav = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 100;
  padding: .25em .5em;

  * {
    margin: .25em .5em;
  }

`;

Styled.Logo = styled(Link)`
  flex: 1;
`;

export default Nav;
