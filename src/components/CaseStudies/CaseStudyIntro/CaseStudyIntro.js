import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const CaseStudyIntro = (props) => {
  const { title, deliverables, description } = props.data;

  const CaseStudyIntroWrapper = styled.div`
    min-height: 100vh;
    position: flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
      flex:1;
      min-height: 400px;
      display: flex;
      align-items: center;
      text-align: center;
      font-size: calc(2.023em + 1vw);
    }

    div {
      display: flex;
      text-align: left;

      p {
        margin: 0 1em;
      }
    }
  `;

  return (
    <CaseStudyIntroWrapper>
      <h1>{RichText.asText(title)}</h1>
      <div>
        <p>{deliverables}</p>
        <p>{RichText.asText(description)}</p>
      </div>
    </CaseStudyIntroWrapper>
  );
};

export default CaseStudyIntro;
