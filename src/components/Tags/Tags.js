import React from 'react';
import PropTypes from 'prop-types';
import './tags.css';

const Tags = (props) => {
  const tagList = props.tagList.map((tagName) => {
    const _tagShouldHighlight = props.activeTags.indexOf(tagName) !== -1;
    const highlighted = { color: '#f6f6f6' };

    return (
      <li
        className="tagIndicator__tag"
        style={_tagShouldHighlight ? highlighted : null}
        key={tagName}
      >{tagName}
      </li>
    );
  });

  return (
    <ul className="tagList__ul">{ tagList }</ul>
  );
};

Tags.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Tags;
