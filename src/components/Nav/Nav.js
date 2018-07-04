import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import NowPlaying from '../../containers/NowPlaying/NowPlaying';

const NavWrapper = styled.nav`
  position:fixed;
  z-index: 10;
  display: flex;
  width: 100vw;
  padding: 0 .5em;
  box-sizing: border-box;
`;
const NavItem = styled.div`
  margin: .61805em .5em;
  white-space: nowrap;
  flex: ${props => (props.full ? 1 : 0)}
`;

const Nav = () => (
  <NavWrapper>
    <NavItem full><Link to="/">Tyler McRobert</Link></NavItem>
    <NavItem><a href="mailto:hello@tylermcrobert.com">Contact</a></NavItem>
    <NavItem><NowPlaying /></NavItem>
  </NavWrapper>
);
export default Nav;
