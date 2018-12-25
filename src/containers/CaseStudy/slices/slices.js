import React from 'react';
import SingleImage from './SingleImage/SingleImage';

const Slices = ({ modules, title }) => modules.map((module) => {
  switch (module.slice_type) {
    case 'single_image':
      return (<SingleImage.Wrapper />);
    default:
      return <p>something else</p>;
  }
}).map((el, i) => React.cloneElement(el, {
  key: i,
  data: modules[i],
  alt: `${title} — Tyler McRobert`,
}));

export default Slices;
