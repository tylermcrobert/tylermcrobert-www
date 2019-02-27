import React from 'react';
import Page from 'components/Page/Page';

import Styled from './styled';

function Info() {
  return (
    <Page>
      <Styled.Heading>
        <h1><em>Bio</em>→I&apos;m Tyler McRobert, a midwest–born <br />designer living in Portland, OR. Currently <br />taking over the world at <a href="http://this.design">This.</a></h1>
      </Styled.Heading>
    </Page>
  );
}


export default Info;
