import React from 'react';

const IndexIndicator = (props) => {
  const { currentCaseStudy } = props;
  const currentIndex = currentCaseStudy ? props.getPageIndex(props.doc) + 1 : 1;
  const indexTotal = props.doc.data.case_study_list.length + 1;

  return (
    <p className="caseStudies__IndexIndicator">{currentIndex} of {indexTotal}</p>
  );
};

export default IndexIndicator;
