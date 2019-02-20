import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollAnimController from './lib/ScrollController';

export default function FadeIn({ children }) {
  const ref = useRef();

  useEffect(() => {
    const controller = new ScrollAnimController(ref.current);
    controller.on('enter', () => console.log('asdf'));

    return (() => {
      controller.destroy(ref.current);
    });
  }, []);
  return <div className="adsf" ref={ref}>{children}</div>;
}

FadeIn.propTypes = {
  children: PropTypes.element.isRequired,
};
