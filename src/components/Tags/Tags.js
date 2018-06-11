import React from 'react';

const Tags = (props) => {
  const tagList = props.tags.map((tag) => {
    const isActive = 'active';
    return (
      <li key={tag} className={isActive}>{tag}</li>
    );
  });

  return (
    <ul className="caseStudies__tags">{tagList}</ul>
  );
};

export default Tags;
