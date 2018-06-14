import React from 'react';

const Tags = (props) => {
  const tagList = props.tags.map((tag) => {
    const caseStudyIsSelected = props.currentCaseStudy !== null;
    const caseStudyIsHovered = !caseStudyIsSelected && props.hoveredCaseStudy;
    let recievedTag = false;

    if (caseStudyIsSelected) {
      recievedTag = props.currentCaseStudy.tags.indexOf(tag) !== -1;
    }

    if (caseStudyIsHovered) {
      recievedTag = props.hoveredCaseStudy.tags.indexOf(tag) !== -1;
    }

    const classList = recievedTag ? ['active'] : [null];

    return (
      <li key={tag} className={`caseStudies__tags ${classList.join('  ')}`}>{tag}</li>
    );
  });

  return (
    <ul className="caseStudies__tags">{tagList}</ul>
  );
};

export default Tags;
