import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const FullFrame = ({ children }) => (
  <Styled.Frame>
    {children}
  </Styled.Frame>
);

FullFrame.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FullFrame;

const Styled = {};

Styled.Frame = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
