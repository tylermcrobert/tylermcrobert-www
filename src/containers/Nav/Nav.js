import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

import NowPlayingIcon from './NowPlayingIcon/NowPlayingIcon';

const Nav = ({ location }) => (
  <Styled.Nav>
    <Styled.Logo to={{ pathname: '/', search: location.search }}>Tyler McRobert</Styled.Logo>
    <Styled.NavItem>info</Styled.NavItem>
    <Styled.NavItem>
      <NowPlayingIcon />
    </Styled.NavItem>
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
`;

const margin = css`
  margin: .25em .5em;
`;
Styled.NavItem = styled.div`
  ${margin}
`;

Styled.Logo = styled(Link)`
  flex: 1;
  ${margin}
`;

export default withRouter(Nav);
