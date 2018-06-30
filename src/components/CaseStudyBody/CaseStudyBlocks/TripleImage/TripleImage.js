import React from 'react';
import Image from '../Image/Image';
import Row from '../Row/Row';
import Col from '../Col/Col';

const TripleImage = (props) => {
  const largeImageOnLeft = props.data.primary.main_image_position === 'Left';
  const {
    main_image: mainImage,
    secondary_image_1: secondaryImage1,
    secondary_image_2: secondaryImage2,
  } = props.data.primary;

  const mainImageWrapper = (
    <Col>
      <Image src={mainImage.url} alt={mainImage.alt} />
    </Col>);

  return (
    <Row>
      { largeImageOnLeft ? mainImageWrapper : null }
      <Col>
        <Image src={secondaryImage1.url} alt={secondaryImage1.alt} />
        <Image src={secondaryImage2.url} alt={secondaryImage2.alt} />
      </Col>
      { !largeImageOnLeft ? mainImageWrapper : null }
    </Row>);
};

export default TripleImage;
