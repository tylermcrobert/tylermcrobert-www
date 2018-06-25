import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';


const NavWrapper = styled.nav`
  position:fixed;
  z-index: 10;
`;

const Nav = () => (
  <NavWrapper>
    <Link to="/">Tyler McRobert</Link>
  </NavWrapper>
);
export default Nav;
