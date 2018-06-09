import React from 'react';

export default function CaseStudyList(props) { // rename to CaseStudyIndex
  const csListData = props.doc.data.case_study_list;
  const list = csListData.map((caseStudies) => {
    const caseStudy = caseStudies.case_study_item;
    return (
      <h2
        onClick={() => props.changeCaseStudy(caseStudy.uid)}
        slug={caseStudy.slug} >
        {caseStudy.slug}
      </h2>
    );
  });

  return (
    <div className="caseStudyIndex">
      <ul className="caseStudyIndex--list">
        <li>{list}</li>
      </ul>
    </div>
  );
}
