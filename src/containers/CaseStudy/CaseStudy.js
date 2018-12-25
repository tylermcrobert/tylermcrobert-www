import React from 'react';
import { RichText } from 'prismic-reactjs';

const CaseStudy = ({ data }) => (
  <div>
    <div>{RichText.asText(data.data.title)}</div>
    <div>{RichText.asText(data.data.description)}</div>
  </div>
);

export default CaseStudy;
