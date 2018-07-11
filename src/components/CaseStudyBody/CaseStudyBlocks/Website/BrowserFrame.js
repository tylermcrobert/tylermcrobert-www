import React from 'react';
import styled from 'styled-components';

const BrowserFrame = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 22">
    <path fill={props.frameColor || '#ededed'} d="M0 0h850v22H0V0z" />
    <circle cx="11" cy="11" r="3" fill={props.buttonColor || '#ff5f58'} />
    <circle cx="22" cy="11" r="3" fill={props.buttonColor || '#ffc130'} />
    <circle cx="33" cy="11" r="3" fill={props.buttonColor || '#29ca41'} />
  </Svg>);


const Svg = styled.svg`
  display: block;
`;

export default BrowserFrame;
