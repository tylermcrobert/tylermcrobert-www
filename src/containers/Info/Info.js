import React from 'react';
import styled from 'styled-components/macro';
import posed from 'react-pose';

function Info() {
  return (
    <Styled.PageContainer>
      <Styled.Heading>
        <h1><em>Bio</em>→I'm Tyler McRobert, a midwest–born <br />designer living in Portland, OR. Currently <br />taking over the world at <a href="http://this.design">This.</a></h1>
      </Styled.Heading>
    </Styled.PageContainer>
  );
}

const Styled = {};


const posedContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});
Styled.PageContainer = styled(posedContainer)`
  padding: 1rem;
`;

const fontSize = 'calc(.75em + 2vw)';

Styled.Heading = styled.div`
  min-height: 66vh;
  font-size: ${fontSize};
  line-height: 1.4;
  padding: ${fontSize};
  text-indent: calc((.375em + 1vw) * -1);

  display: flex;
  align-items: center;
`;


export default Info;
