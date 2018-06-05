import React from 'react';

const Tag = props => <li>{props.name}</li>;

const Tags = () => {
  const TAGDATA = [
    { name: 'Dev', key: '0' },
    { name: 'UX', key: '1' },
    { name: 'Digital', key: '2' },
    { name: 'Print', key: '4' },
  ];
  const tagList = TAGDATA.map(tag =>
    <Tag name={tag.name} key={tag.key} />);

  return (
    <ul>{tagList}</ul>
  );
};

export default Tags;
