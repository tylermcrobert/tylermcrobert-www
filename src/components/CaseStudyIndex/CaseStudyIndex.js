import React from 'react';
import { RichText } from 'prismic-reactjs';


export default function CaseStudyIndex(props) {
  const csListData = props.doc.data.case_study_list;

  const list = csListData.map((caseStudies) => {
    const caseStudy = caseStudies.case_study_item;
    return (
      <li key={caseStudy.slug}>
        <h2
          onClick={() => props.changeCaseStudy(caseStudy)}
          slug={caseStudy.slug}
        >
          {RichText.asText(caseStudy.data.title)}
        </h2>
      </li>
    );
  });
  return (
    <div className="caseStudyIndex">
      <ul className="caseStudyIndex__list">
        {list}
      </ul>
    </div>
  );
}
