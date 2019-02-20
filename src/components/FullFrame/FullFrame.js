import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { media } from 'containers/App/styled';

const FullFrame = ({ children, context }) => (
  <Styled.FullFrame context={context}>
    {children}
  </Styled.FullFrame>
);

FullFrame.defaultProps = {
  context: false,
};

FullFrame.propTypes = {
  children: PropTypes.element.isRequired,
  context: PropTypes.bool,
};

export default FullFrame;

const Styled = {};

Styled.FullFrame = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.context && '0 3rem'} ;
  ${media.phone`
    padding: 0;
  `}
`;
