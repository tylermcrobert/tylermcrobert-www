import styled from "styled-components"
import { Paragraph } from "components"
import { mq } from "style"

const Wrapper = styled.div`
  padding: ${props => props.theme.margins.large} 0;
`

const Intro = styled.div`
  grid-column: span 6;

  a {
    text-decoration: underline;
  }
`

const Copy = styled.div`
  grid-column: span 6;

  @media ${mq.sm} {
    grid-column: 1 / span 3;
  }
`

const IndentedCopy = styled(Paragraph)`
  grid-column: span 6;

  @media ${mq.sm} {
    grid-column: 1 / span 3;
  }
`

const TwoCol = styled.div`
  column-count: 2;
  max-width: 30em;
`

export default {
  Wrapper,
  Copy,
  IndentedCopy,
  Intro,
  TwoCol,
}
