import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const ContextFrame = ({ children }) => (
  <Styled.Frame>
    {children}
  </Styled.Frame>
);

ContextFrame.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ContextFrame;

const Styled = {};

Styled.Frame = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3rem;
`;
