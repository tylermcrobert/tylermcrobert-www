import React from 'react';

const SingleImage = ({ imgUrl, alt }) => (
  <div>
    <img src={imgUrl} alt={alt} />
  </div>
);

SingleImage.Wrapper = ({ data, alt }) => (
  <SingleImage alt={alt} imgUrl={data.primary.image.url} />
);

export default SingleImage;
