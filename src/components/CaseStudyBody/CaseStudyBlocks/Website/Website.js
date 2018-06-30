import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';
import Row from '../Row/Row';
import Col from '../Col/Col';

const WebsiteWrapper = styled.div`
  margin: 10%;
  background: blue;
`;

const Website = (props) => {
  const image = props.data.primary.browser_image;
  const websiteContent = <Image src={image.url} alt={image.alt} />;

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

/*

const image = block.primary.browser_image;

if (image.url) {
  return (
    <Row key={key}>
      <Image src={image.url} alt={image.alt} key={image.url} />
    </Row>
  );
}

*/
