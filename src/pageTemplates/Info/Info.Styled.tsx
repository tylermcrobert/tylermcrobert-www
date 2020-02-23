import styled from "styled-components"
import { mq } from "style"

const Wrapper = styled.div`
  padding: ${props => props.theme.margins.large} 0;

  a {
    text-decoration: underline;
  }

  * {
    grid-row-gap: ${props => props.theme.remScale[7]};
  }
`

const Intro = styled.div`
  grid-column: span 6;
`

const Copy = styled.div`
  grid-column: span 6;

  @media ${mq.sm} {
    grid-column: span 3;
  }

  p {
    max-width: 25em;
    margin-bottom: 1rem;
    text-indent: 2rem;
  }
`

const TwoCol = styled.div`
  column-count: 2;
  max-width: 30em;
`

export default {
  Wrapper,
  Copy,
  Intro,
  TwoCol,
}
