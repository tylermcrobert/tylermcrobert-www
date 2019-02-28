import styled from 'styled-components/macro';

const Styled = {};

const fontSize = 'calc(.75rem + 2vw)';

Styled.Heading = styled.div`
  min-height: 66vh;
  font-size: ${fontSize};
  line-height: 1.4;
  padding: ${fontSize};
  text-indent: calc((.375rem + 1vw) * -1);

  display: flex;
  align-items: center;

  a {
    position: relative;

    &:after{
      content: " ";
      bottom: 0;
      left: .1em;
      width: 100%;
      height: .05em;
      background: url('data:image/svg+xml;utf8,<svg height="4" viewBox="0 0 13 4" width="13" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" fill="%23fff" fill-rule="evenodd" r="2"/></svg>');
      background-size: contain;
      background-repeat:repeat-x;
      position: absolute;
    }
  }
`;

Styled.Item = styled.div`
  padding-left: calc(.75rem + 2vw);
`;
export default Styled;
