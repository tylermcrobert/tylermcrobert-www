import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';


const NavWrapper = styled.nav`
  position:fixed;
`;

// figure it out here:
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md

const Nav = () => (
  <NavWrapper>
    <Link to="/god-dammit-wtf">Tyler McRobert</Link>
  </NavWrapper>
);
export default Nav;
