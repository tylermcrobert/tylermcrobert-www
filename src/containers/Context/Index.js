import React from 'react';
import style from './Context.module.css';

const Index = ({ index, length }) => (
  <div className={style.item}>{index} of {length}</div>
);

export default Index;
