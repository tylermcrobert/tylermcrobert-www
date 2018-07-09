import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const CaseStudyIntro = (props) => {
  const { title, deliverables, description } = props.data;

  const CaseStudyIntroWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 3em;

    @media (max-width: 599px) {
      padding: 0 1em;
    }

    .caseStudyIntro__title {
      flex:1;
      min-height: 400px;
      display: flex;
      align-items: center;
      text-align: center;
      margin: 0 1em;

      h1 {
        font-size: calc(2.023em + 1vw);
      }
    }

    .caseStudyIntro__info {
      flex: 0;
      margin-bottom: 4em;
      display: flex;
      margin: 0 0 2.61792em;
      max-width: 48em;

      @media (max-width: 599px) {
        flex-direction: column;
      }

      &__deliverables, &__description {
        margin: 0 1em;

        p{
          margin: 0;
        }
      }

      &__description {
        flex-basis: 70%;
      }

      &__deliverables {
        flex-basis: 30%;
        margin-bottom:1em;

        p {
          font-size: .81em;
        }
      }
    }
  `;

  return (
    <CaseStudyIntroWrapper className="caseStudyIntro">
      <div className="caseStudyIntro__title"><h1>{RichText.asText(title)}</h1></div>
      <div className="caseStudyIntro__info">
        <div className="caseStudyIntro__info__deliverables"><p>{deliverables}</p></div>
        <div className="caseStudyIntro__info__description"><p>{RichText.asText(description)}</p></div>
      </div>
    </CaseStudyIntroWrapper>
  );
};

export default CaseStudyIntro;
