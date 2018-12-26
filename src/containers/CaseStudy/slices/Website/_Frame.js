import React from 'react';

const Frame = ({ dotColor, frameColor, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 850 22"
  >
    <path fill={frameColor || '#4a4a4a'} d="M0 0h850v22H0V0z" />
    <circle cx="11" cy="11" r="3" fill={dotColor || '#ff5f58'} />
    <circle cx="22" cy="11" r="3" fill={dotColor || '#ffc130'} />
    <circle cx="33" cy="11" r="3" fill={dotColor || '#29ca41'} />
  </svg>
);

export default Frame;
