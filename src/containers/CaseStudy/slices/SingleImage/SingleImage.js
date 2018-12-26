import React from 'react';
import { Img } from './../_partials';

const SingleImage = ({ imgUrl, alt }) => (
  <div>
    <Img src={imgUrl} alt={alt} />
  </div>
);

SingleImage.Wrapper = ({ data, alt }) => (
  <SingleImage alt={alt} imgUrl={data.primary.image.url} />
);

export default SingleImage;
