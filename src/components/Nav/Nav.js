import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <div className={styles.nav}>
    <Link to="/">Tyler McRobert</Link>
  </div>
);

export default Nav;
