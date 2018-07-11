import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';
import Row from '../Row/Row';
import Col from '../Col/Col';
import BrowserFrame from './BrowserFrame';

const WebsiteWrapper = styled.div`
  margin: 10%;
  border-radius: .25em;
  overflow: hidden;
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
    : (
      <Video playsinline autoPlay loop muted>
        <source src={media.url} type="video/mp4" />
      </Video>
    );
  const {
    browser_frame_color: frameColor,
    background_color: background,
    button_color: buttonColor,
  } = props.data.primary;
  return (
    <Row>
      <Col background={background}>
        <WebsiteWrapper>
          <BrowserFrame frameColor={frameColor} buttonColor={buttonColor} />
          {websiteContent}
        </WebsiteWrapper>
      </Col>
    </Row>);
};

export default Website;
