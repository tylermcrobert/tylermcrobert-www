import React from 'react';

export default function CaseStudyIndex(props) {
  const csListData = props.doc.data.case_study_list;
  const list = csListData.map((caseStudies) => {
    const caseStudy = caseStudies.case_study_item;
    return (
      <li key={caseStudy.slug}>
        <h2
          onClick={() => props.changeCaseStudy(caseStudy.uid)}
          slug={caseStudy.slug} >
          {caseStudy.slug}
        </h2>
      </li>
    );
  });

  return (
    <div className="caseStudyIndex">
      <ul className="caseStudyIndex--list">
        {list}
      </ul>
    </div>
  );
}
