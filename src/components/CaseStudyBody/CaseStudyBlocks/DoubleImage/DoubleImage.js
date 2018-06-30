
import React from 'react';
import Image from '../Image/Image';
import Row from '../Row/Row';
import Col from '../Col/Col';

const DoubleImage = (props) => {
  const {
    left_image: leftImage,
    right_image: rightImage,
  } = props.data.primary;

  return (
    <Row>
      <Col><Image src={leftImage.url} alt={leftImage.alt} /></Col>
      <Col><Image src={rightImage.url} alt={leftImage.alt} /></Col>
    </Row>);
};

export default DoubleImage;
