import React from 'react';
import { Link } from 'react-router-dom';
import NowPlaying from 'containers/NowPlaying/NowPlaying';
import styles from './Nav.module.css';

const Nav = () => (
  <div className={styles.nav}>
    <Link to="/">Tyler McRobert</Link>
    <NowPlaying />
  </div>
);

export default Nav;
