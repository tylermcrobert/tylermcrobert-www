import { RichText } from 'prismic-reactjs';
import React from 'react';
import PrismicConfig from '../../prismic/prismic-configuration';

function Intro(props) {
  const introText =
    RichText.asText(props.doc.data.intro_message, PrismicConfig.linkResolver);

  return (
    <div className="intro">
      <h2>{introText}</h2>
    </div>
  );
}

export default Intro;
