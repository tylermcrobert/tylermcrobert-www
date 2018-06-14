import React from 'react';

const IndexIndicator = (props) => {
  const caseStudyIsSelected = props.currentCaseStudy !== null;
  const caseStudyIsHovered = !caseStudyIsSelected && props.hoveredCaseStudy;
  let currentIndex = 0;

  if (caseStudyIsSelected) {
    currentIndex = props.getPageIndex(props.doc);
  }
  if (caseStudyIsHovered) {
    currentIndex = props.getPageIndex(props.doc, props.hoveredCaseStudy.uid);
  }
  const indexTotal = props.doc.data.case_study_list.length;

  return (
    <p className="caseStudies__IndexIndicator">{currentIndex + 1} of {indexTotal}</p>
  );
};

export default IndexIndicator;
