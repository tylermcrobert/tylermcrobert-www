import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import Slices from './slices/slices';

const CaseStudy = ({ data }) => (
  <div>
    <ContextFrame>
      <Cover>
        <TitleWrapper>
          <h1>{RichText.asText(data.data.title)}</h1>
        </TitleWrapper>
        <p>{RichText.asText(data.data.description)}</p>
      </Cover>
    </ContextFrame>
    <Slices modules={data.data.cs_content} title={RichText.asText(data.data.title)} />
  </div>
);


const Cover = styled.div`
  /* border: 1px solid blue; */
  padding: 2em 0; 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const TitleWrapper = styled.div`
  font-size: calc(2.023em + 1vw);
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CaseStudy;
