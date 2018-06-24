import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import React from 'react';

const IntroWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: calc(2.023em + 1vw);
    width: 66.6%;
  }
`;

const Intro = (props) => {
  const introText =
    RichText.asText(props.doc.data.intro_message);

  return (
      <IntroWrapper><h1>{introText}</h1></IntroWrapper>
  );
};

export default Intro;
