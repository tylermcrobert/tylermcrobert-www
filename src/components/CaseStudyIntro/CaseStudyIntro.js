import React from 'react';
import { RichText } from 'prismic-reactjs';

const CaseStudyIntro = (props) => {
  if (props.data) {
    const { title, deliverables, description } = props.data;
    return (
      <div className="caseStudy__intro">
        <h2>{RichText.asText(title)}</h2>
        <p>{deliverables}</p>
        <p>{RichText.asText(description)}</p>
      </div>
    );
  }
  return "loadin'";
};

export default CaseStudyIntro;
