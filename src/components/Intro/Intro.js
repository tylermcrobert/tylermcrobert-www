import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';
import React from 'react';
import PrismicConfig from '../../prismic/prismic-configuration';

const IntroWrapper = styled.h1`
  font-size: calc(2.023em + 1vw);
`;

const Intro = (props) => {
  const introText =
    RichText.asText(props.doc.data.intro_message, PrismicConfig.linkResolver);

  return (
    <div className="intro">
      <IntroWrapper>{introText}</IntroWrapper>
    </div>
  );
};

export default Intro;
