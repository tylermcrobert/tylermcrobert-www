import React from 'react';
import CaseStudy from './CaseStudy/CaseStudy';
import Tags from './Tags/Tags';
import ListTitle from './ListTitle/ListTitle';

export default function CaseStudies(props) {
  const csListData = props.doc.data.case_study_list;
  const selectedCaseStudy = props.currentCaseStudy;
  console.log(props)

  const list = csListData.map((caseStudies) => {
    const caseStudy = caseStudies.case_study_item;
    const caseStudyIsMatch = selectedCaseStudy === caseStudy.uid;

    if (caseStudyIsMatch) {
      return (
        <CaseStudy
          slug={caseStudy.slug}
          id={caseStudy.id}
          key={caseStudy.id}
          currentCaseStudy={props.currentCaseStudy}
          changeCaseStudy={props.changeCaseStudy}
          prismicCtx={props.prismicCtx}
        />
      );
    } else if (!selectedCaseStudy) {
      return (
        <ListTitle
          slug={caseStudy.slug}
          clicked={() => props.changeCaseStudy(caseStudy.uid)}
          key={caseStudy.id}
        />
      );
    }
    return null;
  });

  return (
    <div className="caseStudies">
      <Tags />
      <ul className="caseStudy">{list}</ul>
    </div>
  );
}
