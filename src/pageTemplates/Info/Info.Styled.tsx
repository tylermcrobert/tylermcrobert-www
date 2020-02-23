import styled from "styled-components"
import { mq } from "style"
import { Grid } from "components"

const Info = styled.div`
  a {
    text-decoration: underline;
  }

  margin: ${props => props.theme.margins.large} 0;
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

const Hr = styled.hr`
  border: 0;
  border-bottom: 1px dashed black;
`

const PlaylistWrapper = styled(Grid)`
  > div {
    &:nth-child(1),
    &:nth-child(2) {
      grid-column: span 2;
    }

    &:nth-child(4) {
      text-align: right;
    }
  }
`

export default {
  Info,
  Copy,
  TwoCol,
  Hr,
  PlaylistWrapper,
}
