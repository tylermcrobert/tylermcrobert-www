import React from 'react';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import style from './CaseStudy.module.css';
import Slices from './slices/slices';

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
    <Slices modules={data.data.cs_content} title={RichText.asText(data.data.title)} />
  </div>
);

export default CaseStudy;
