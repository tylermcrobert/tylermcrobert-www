import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import NowPlaying from '../../containers/NowPlaying/NowPlaying';

export default class Nav extends React.Component {
  state = {
    nowPlayingIsOpen: false,
  }

  handleCollapse = () => {
    this.setState({
      nowPlayingIsOpen: !this.state.nowPlayingIsOpen,
    });
  }

  render() {
    const { nowPlayingIsOpen, mobile } = this.state;
    return (
      <NavWrapper nowPlayingIsOpen={nowPlayingIsOpen}>
        <NavItem
          nowPlayingIsOpen={nowPlayingIsOpen}
          className="logo"
        ><Link to="/">Tyler McRobert</Link>
        </NavItem>
        <NavItem nowPlayingIsOpen={nowPlayingIsOpen}>
          <a href="mailto:hello@tylermcrobert.com">Contact</a>
        </NavItem>
        <NavItem className="nowPlaying">
          <NowPlaying
            nowPlayingIsOpen={nowPlayingIsOpen}
            mobile={mobile}
            handleCollapse={this.handleCollapse}
          />
        </NavItem>
      </NavWrapper>
    );
  }
}


const NavWrapper = styled.nav`
  transition: width 500ms ease, transform 500ms ease;
  position:fixed;
  z-index: 10;
  display: flex;
  width: calc( 100% - 3em);
  box-sizing: border-box;
  margin: 0 .5em;

  @media (max-width: 599px) {
    transform: translateX(${params => (params.nowPlayingIsOpen ? 'calc( -100%)' : 0)});
  }

  @media (min-width: 599px) {
    width: ${params => (params.nowPlayingIsOpen ? 'calc( 100% - 20em)' : 'calc( 100% - 3em)')};
  }

`;

const NavItem = styled.div`
  transition: 500ms all ease;
  margin: .61805em .5em;
  white-space: nowrap;

  @media (max-width: 599px) {
    /* fade out all other items on mobile */
    opacity: ${params => (params.nowPlayingIsOpen ? 0 : 1)};
  }

  &.logo{
    flex:1;

    @media (max-width: 500px) {
      /* depth effect for logo */
      transform: translateX(${params => (params.nowPlayingIsOpen ? '50%' : 0)});
    }
  }

  &.nowPlaying{
    position:absolute;
    right: -1em;
    transform: translateX(100%);
  }
`;
