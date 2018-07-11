import React from 'react';
import Row from '../Row/Row';
import Image from '../Image/Image';

const SingleImage = props => (
  <Row>
    <Image
      src={props.data.primary.image.url}
      alt={props.data.primary.image.alt}
    />
  </Row>);

export default SingleImage;
