import React from 'react';
import styled from 'styled-components';

const BrowserFrame = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 30">
    <path fill={props.frameColor || '#ededed'} d="M0 0h850v30H0V0z" />
    <circle cx="15" cy="15" r="4" fill={props.buttonColor || '#ff5f58'} />
    <circle cx="30" cy="15" r="4" fill={props.buttonColor || '#ffc130'} />
    <circle cx="45" cy="15" r="4" fill={props.buttonColor || '#29ca41'} />
  </Svg>);


const Svg = styled.svg`
  display: block;
`;

export default BrowserFrame;
