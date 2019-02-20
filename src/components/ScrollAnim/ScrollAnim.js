import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

export default function ScrollAnim({ children }) {
  const [ref, isInView] = useInView({ threshold: [0.2, 0] });
  return (
    <Animated ref={ref} active={isInView} >
      {children}
    </Animated>
  );
}

const Animated = styled.div`
  opacity: 0;
  transition: 1200ms opacity cubic-bezier(.4,.6,.6,1);

  ${props => props.active && css`
    opacity: 1;
  `}
`;

ScrollAnim.propTypes = {
  children: PropTypes.element.isRequired,
};
