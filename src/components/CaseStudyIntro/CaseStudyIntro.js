import React from 'react';
import { RichText } from 'prismic-reactjs';

const CaseStudyIntro = (props) => {
  const { title, deliverables, description } = props.data;
  return (
    <div className="caseStudy__intro">
      <h1>{RichText.asText(title)}</h1>
      <p>{deliverables}</p>
      <p>{RichText.asText(description)}</p>
    </div>
  );
};

export default CaseStudyIntro;
