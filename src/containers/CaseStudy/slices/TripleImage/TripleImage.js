import React from 'react';
import { Img, Partition, FlexContainer } from './../_partials';

const TripleImage = ({ imgUrls, alt, mainImageUrl, left }) => {
  const partitions = [
    <Partition key="1">
      <Img src={mainImageUrl} alt={alt} />
    </Partition>,
    <Partition key="2">
      {imgUrls.map(url => (
        <Img src={url} key={url} alt={alt} />
      ))}
    </Partition>,
  ];
  return (
    <FlexContainer>{left ? partitions : partitions.reverse()}</FlexContainer>
  );
};

TripleImage.Wrapper = ({ data, alt }) => {
  const {
    secondary_image_1: image1,
    secondary_image_2: image2,
    main_image_position: position,
    main_image: mainImage,
  } = data.primary;
  return (
    <TripleImage
      alt={alt}
      left={position === 'Left'}
      imgUrls={[image1.url, image2.url]}
      mainImageUrl={mainImage.url}
    />
  );
};

export default TripleImage;
