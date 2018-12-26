import React from 'react';
import { Link } from 'react-router-dom';
import NowPlayingIcon from './NowPlayingIcon/NowPlayingIcon';
import style from './Nav.module.css';

const Nav = () => (
  <div className={style.nav}>
    <Link className={style.logo} to="/">Tyler McRobert</Link>
    <div>info</div>
    <NowPlayingIcon />
  </div>
);

export default Nav;
