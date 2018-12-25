import React from 'react';
import style from './SingleImage.module.css';

const SingleImage = ({ imgUrl, alt }) => (
  <div className={style.singleImage}>
    <img src={imgUrl} alt={alt} />
  </div>
);

SingleImage.Wrapper = ({ data, alt }) => (
  <SingleImage alt={alt} imgUrl={data.primary.image.url} />
);

export default SingleImage;
