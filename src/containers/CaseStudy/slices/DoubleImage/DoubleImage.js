import React from 'react';
import style from './DoubleImage.module.css';

const DoubleImage = ({ imgUrls, alt }) => (
  <div className={style.doubleImage}>
    {
      imgUrls.map(url => (
        <div key={url} className={style.partition}>
          <img src={url} key={url} alt={alt} />
        </div>
      ))
    }
  </div>
);

DoubleImage.Wrapper = ({ data, alt }) => {
  const imgUrls = [
    data.primary.left_image.url,
    data.primary.right_image.url,
  ];

  return (
    <DoubleImage alt={alt} imgUrls={imgUrls} />
  );
};

export default DoubleImage;
