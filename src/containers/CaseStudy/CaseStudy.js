import React from 'react';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import style from './CaseStudy.module.css';

const CaseStudy = ({ data }) => (
  <ContextFrame>
    <h1 className={style.title}>{RichText.asText(data.data.title)}</h1>
    <p>{RichText.asText(data.data.description)}</p>
  </ContextFrame>
);

export default CaseStudy;
