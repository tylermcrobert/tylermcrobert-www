import React from 'react';
import { Img, Partition, FlexContainer } from './../_partials';

const DoubleImage = ({ imgUrls, alt }) => (
  <FlexContainer>
    {imgUrls.map(url => (
      <Partition key={url}>
        <Img src={url} key={url} alt={alt} />
      </Partition>
    ))}
  </FlexContainer>
);

DoubleImage.Wrapper = ({ data, alt }) => {
  const imgUrls = [data.primary.left_image.url, data.primary.right_image.url];

  return <DoubleImage alt={alt} imgUrls={imgUrls} />;
};

export default DoubleImage;
