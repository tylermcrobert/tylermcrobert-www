import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';
import Row from '../Row/Row';
import Col from '../Col/Col';

const WebsiteWrapper = styled.div`
  margin: 10%;
`;
const Video = styled.video`
  width: 100%;
  display:block;
`;

const Website = (props) => {
  const image = props.data.primary.browser_image;
  const media = props.data.primary.browser_media;

  const websiteContent = (!media.url)
    ? <Image src={image.url} alt={image.alt} />
    : <Video autoPlay muted ><source src={media.url} type="video/mp4" /></Video>;

  return (
    <Row>
      <Col>
        <WebsiteWrapper>
          {websiteContent}
        </WebsiteWrapper>
      </Col>
    </Row>);
};

export default Website;
