import React from 'react';
import { RichText } from 'prismic-reactjs';
import style from './CaseStudy.module.css';

const CaseStudy = ({ data }) => (
  <div>
    <h1 className={style.title}>{RichText.asText(data.data.title)}</h1>
    <p>{RichText.asText(data.data.description)}</p>
  </div>
);

export default CaseStudy;
