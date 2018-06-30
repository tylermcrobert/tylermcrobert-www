import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  align-self: flex-start;
`;
const Image = props => (
  <Img src={props.src} alt={props.alt} />
);

export default Image;
