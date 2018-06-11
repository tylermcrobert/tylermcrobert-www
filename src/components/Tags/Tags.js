import React from 'react';

const Tags = (props) => {
  const tagList = props.tags.map((tag) => {
    // console.log(props.currentCaseStudy)
    const recievedTags = props.currentCaseStudy && props.currentCaseStudy.tags.indexOf(tag) !== -1;
    const classList = recievedTags ? ['active'] : [null];

    return (
      <li key={tag} className={`caseStudies__tags ${classList.join('  ')}`}>{tag}</li>
    );
  });

  return (
    <ul className="caseStudies__tags">{tagList}</ul>
  );
};

export default Tags;
