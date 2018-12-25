import React from 'react';
import style from './ContextFrame.module.css';

const ContextFrame = ({ children }) => (
  <div className={style.frame}><div>{children}</div></div>
);

export default ContextFrame;
