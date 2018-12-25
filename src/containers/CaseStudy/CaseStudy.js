import React from 'react';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import style from './CaseStudy.module.css';

const CaseStudy = ({ data }) => (
  <div>
    <ContextFrame>
      <div className={style.cover}>
        <div className={style.titleWrapper}>
          <h1 className={style.title}>{RichText.asText(data.data.title)}</h1>
        </div>
        <p>{RichText.asText(data.data.description)}</p>
      </div>
    </ContextFrame>
    asdflkja
  </div>
);

export default CaseStudy;
