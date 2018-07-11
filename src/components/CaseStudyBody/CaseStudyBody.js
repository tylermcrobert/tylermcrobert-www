import React from 'react';
import SingleImage from './CaseStudyBlocks/SingleImage/SingleImage';
import DoubleImage from './CaseStudyBlocks/DoubleImage/DoubleImage';
import TripleImage from './CaseStudyBlocks/TripleImage/TripleImage';
import Website from './CaseStudyBlocks/Website/Website';

const CaseStudyBody = (props) => {
  const content = props.blocks.map((block, i) => {
    const key = block.slice_type + i;

    switch (block.slice_type) {
      case 'single_image':
        return <SingleImage key={key} data={block} />;
      case 'double_image_block':
        return <DoubleImage key={key} data={block} />;
      case 'triple_image_block':
        return <TripleImage key={key} data={block} />;
      case 'website':
        return <Website key={key} data={block} />;
      default:
        console.error('Could not find slice type', block.slice_type); // eslint-disable-line no-console
    }
    return null;
  });
  return content;
};

export default CaseStudyBody;
