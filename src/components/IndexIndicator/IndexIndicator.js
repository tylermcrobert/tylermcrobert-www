import React from 'react';
import styled from 'styled-components';

const IndexIndicator = (props) => {
  const IndexWrapper = styled.div`
    display: inline-block;
    transform: rotate(90deg);
    position: absolute;
    right: calc(-50vh + 2em);
    top: 50vh;
    width: 100vh;
    text-align:center;
    font-size: .81em;
    height: .81em;

    p {
      display: inline-block;
      margin auto 10px;
      color: black;
    };
  `;

  return (
    <IndexWrapper>
      <p className="caseStudies__IndexIndicator">No. {props.currentIndex + 1} of {props.indexLength}</p>
    </IndexWrapper>
  );
};

export default IndexIndicator;
