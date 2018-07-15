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
      <NavWrapper className="navWrapper" nowPlayingIsOpen={nowPlayingIsOpen}>
        <NavItem nowPlayingIsOpen={nowPlayingIsOpen} className="logo" >
          <Link to={{ pathname: '/', search: this.props.location.search }} >
            Tyler McRobert
          </Link>
        </NavItem>
        <NavItem className="contact" nowPlayingIsOpen={nowPlayingIsOpen}>
          <a href="mailto:hello@tylermcrobert.com">Contact</a>
        </NavItem>
        <NavItem
          className="nowPlaying"
          onClick={this.handleCollapse}
          nowPlayingIsOpen={nowPlayingIsOpen}
        >
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
  transition: transform 500ms ease;
  position:fixed;
  z-index: 10;
  display: flex;
  width: 100vw;
  box-sizing: border-box;

  @media (max-width: 599px) {
    width: 200vw;
    transform: ${props => (props.nowPlayingIsOpen ? 'translateX(-100vw)' : '0')}
  }
`;

const NavItem = styled.div`
  transition: 500ms opacity ease, 500ms width ease;
  margin: .61805em .5em;
  white-space: nowrap;

  &:first-child{ margin-left: 1em;}
  &:last-child{ margin-right: 1em;}

  &.logo{
    flex:1;
  }

  @media (max-width: 599px) {
    :not(.nowPlaying) {
      opacity: ${props => (props.nowPlayingIsOpen ? '0' : '1')};
    }
  }

  &.nowPlaying{
    display: flex;

    @media (max-width: 599px) {
      width: ${props => (props.nowPlayingIsOpen ? 'calc( 100vw - 2em )' : 'calc( 100vw + 1em )')};
    }
  }
`;
