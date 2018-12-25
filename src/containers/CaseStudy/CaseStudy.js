import React from 'react';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import style from './CaseStudy.module.css';
import SingleImage from './slices/SingleImage/SingleImage';

const Slices = ({ modules, title }) => modules.map((module) => {
  switch (module.slice_type) {
    case 'single_image':
      return (<SingleImage.Wrapper />);
    default:
      return <p>something else</p>;
  }
}).map((el, i) => React.cloneElement(el, {
  key: i,
  data: modules[i],
  alt: `${title} — Tyler McRobert`,
}));

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
