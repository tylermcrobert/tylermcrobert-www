import { css } from 'styled-components/macro';

const sizes = {
  desktop: 1200,
  laptop: 992,
  tablet: 768,
  phone: 576,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `.join('');
  return acc;
}, {});

export { sizes, media };
export default null;
