import React from 'react';
import styled from 'styled-components';

const IndexIndicator = (props) => {
  const { currentIndex, indexLength } = props;
  const Index = styled.p`
      margin auto 10px;
      color: #f6f6f6;
  `;

  return (
    <Index className="caseStudies__IndexIndicator">No. {currentIndex + 1} of {indexLength}</Index>
  );
};

export default IndexIndicator;
