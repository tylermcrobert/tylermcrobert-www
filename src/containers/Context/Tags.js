import React from 'react';
import PropTypes from 'prop-types';
import style from './Context.module.css';

const Tags = ({ tags, activeTags }) => (
  <ul>
    {tags.map((tag) => {
    const isActive = activeTags.indexOf(tag) !== -1;
    return (
      <li key={tag} className={`${style.item} ${isActive ? style.active : ''}`}>
        {tag}
      </li>
    );
  })}
  </ul>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
