import React from 'react';
import styled from 'styled-components';


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

  const IndexWrapper = styled.div`
    display: inline-block;
    transform: rotate(270deg);
    position: absolute;
    right: calc(-50vh + 1em);
    top: 50%;
    width: 100vh;
    text-align:center;

    p {
      display: inline-block;
      margin auto 10px;
    };
  `;

  return (
    <IndexWrapper>
      <p className="caseStudies__IndexIndicator">{currentIndex + 1} of {indexTotal}</p>
    </IndexWrapper>
  );
};

export default IndexIndicator;
