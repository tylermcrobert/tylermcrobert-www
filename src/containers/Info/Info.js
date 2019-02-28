import React from 'react';
import Page from 'components/Page/Page';

import Styled from './styled';

function Info() {
  return (
    <Page>
      <Styled.Heading>
        <h1><em>Bio</em>→I&apos;m Tyler McRobert, a midwest–born <br />designer living in Portland, OR. Currently <br />taking over the world at <a href="http://this.design">This.</a></h1>
      </Styled.Heading>
      <Styled.Item>
        <h1><em>E-M</em>→<a href="mailto:hello@tylermcrobert.com">hello@tylermcrobert.com</a></h1>
      </Styled.Item>
      <Styled.Item>
        <h1><em>IG</em>→<a href="http://instagram.com/tylermcrobert">@tylermcrobert</a> </h1>
      </Styled.Item>
    </Page>
  );
}


export default Info;
