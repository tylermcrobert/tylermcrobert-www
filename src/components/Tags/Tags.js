import React from 'react';

const Tags = (props) => {
  let tagList;

  if (props.tags) {
    tagList = props.tags.map(tag => <li key={tag.name}>{tag.name}</li>);
  }

  return (
    <ul>{tagList}</ul>
  );
};

export default Tags;
