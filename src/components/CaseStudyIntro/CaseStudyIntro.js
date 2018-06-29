import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled, { keyframes } from 'styled-components';

const CaseStudyIntro = (props) => {
  const { title, deliverables, description } = props.data;
  const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, .5em, 0)
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0)
    }
  `;
  const fadeInDown = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, -.5em, 0)
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0)
    }
  `;

  const grow = keyframes`
    from {
        transform: scale(.95);
    }

    to {
        transform: scale(1);
    }
  `;

  const CaseStudyIntroWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${grow} .75s cubic-bezier(0,.75,.25,1);

    .caseStudyIntro__title{
      flex:1;
      min-height: 400px;
      display: flex;
      align-items: center;
      text-align: center;
      font-size: calc(2.023em + 1vw);
      animation: ${fadeInUp} .75s cubic-bezier(0,.75,.25,1);
    }

    .caseStudyIntro__info {
      flex: 0;
      margin-bottom: 4em;
      display: flex;
      margin: 0 -1em 2.61792em;
      max-width: 48em;
      animation: ${fadeInDown} 1s ease;

      &__deliverables, &__description {
        margin: 0 1em;
      }

      &__description {
        flex-basis: 70%;
      }

      &__deliverables {
        font-size: .81em;
        flex-basis: 30%;
      }
    }
  `;

  return (
    <CaseStudyIntroWrapper className="caseStudyIntro">
      <h1 className="caseStudyIntro__title">{RichText.asText(title)}</h1>
      <div className="caseStudyIntro__info">
        <p className="caseStudyIntro__info__deliverables">{deliverables}</p>
        <p className="caseStudyIntro__info__description">{RichText.asText(description)}</p>
      </div>
    </CaseStudyIntroWrapper>
  );
};

export default CaseStudyIntro;
