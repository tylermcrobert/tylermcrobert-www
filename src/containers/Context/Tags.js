import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ tags, activeTags }) => (
  tags.map((tag) => {
    const isActive = activeTags.indexOf(tag) !== -1;
    return (
      <li key={tag}>
        {tag} {isActive && 'x'}
      </li>
    );
  })
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
