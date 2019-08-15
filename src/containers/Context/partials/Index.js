import React from 'react';
import PropTypes from 'prop-types';

const Index = ({ index, length }) => (
  <div>
    {index} of {length}
  </div>
);

Index.propTypes = {
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};

export default Index;
