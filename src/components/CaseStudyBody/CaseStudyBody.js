import React from 'react';
import styled from 'styled-components';
import SingleImage from '../CaseStudyBlocks/SingleImage/SingleImage';

const Row = styled.div`
  display: flex;
  align-items: left;
  flex-wrap: wrap;
`;

const Col = styled.div`
  flex-basis: 100%;
  flex: 1;
`;

const CaseStudyBody = (props) => {
  const content = props.blocks.map((block, i) => {
    const key = block.slice_type + i;

    switch (block.slice_type) {
      case 'single_image': {
        const { url, alt } = block.primary.image;
        return (
          <Row key={key}>
            <SingleImage src={url} alt={alt} key={key} />
          </Row>
        );
      }
      case 'double_image_block': {
        const cols = [
          block.primary.left_image,
          block.primary.right_image,
        ].map(image => (
          <Col key={image.url}>
            <SingleImage src={image.url} alt={image.alt} key={image.url} />
          </Col>
        ));
        return <Row key={key}>{cols}</Row>;
      }
      case 'triple_image_block': {
        const largeImageIsLeft = block.main_image_position === 'left';
        const mainImage = (<SingleImage
          src={block.primary.main_image.url}
          alt={block.primary.main_image.alt}
          key={block.primary.main_image.url}
        />);

        const smallImgs = [
          block.primary.secondary_image_1,
          block.primary.secondary_image_2,
        ].map(image => <SingleImage src={image.url} alt={image.alt} key={image.url} />);

        if (largeImageIsLeft) {
          return <Row key={key}><Col>{smallImgs}</Col> <Col>{mainImage}</Col></Row>;
        }
        return <Row key={key}><Col>{mainImage}</Col> <Col>{smallImgs}</Col></Row>;
      }
      case 'website': {
        const image = block.primary.browser_image;

        if (image.url) {
          return (
            <Row key={key}>
              <SingleImage src={image.url} alt={image.alt} key={image.url} />
            </Row>
          );
        }
        break;
      }
      default:
        console.error('Could not find slice type', block.slice_type); // eslint-disable-line no-console
    }
    return null;
  });
  return content;
};

export default CaseStudyBody;
