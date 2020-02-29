import styled from "styled-components"
import { Grid, Paragraph } from "components"
import { mq } from "style"

const Intro = styled(Grid)`
  padding-top: ${props => props.theme.margins.large};

  h2 {
    max-width: 11.5em;
    margin-bottom: ${props => props.theme.remScale[0]};
  }
`

const Deliverables = styled.div`
  grid-column: span 3;
  max-width: 16em;

  p:first-child {
    margin-bottom: ${props => props.theme.remScale[0]};
  }
`

const Desc = styled(Paragraph)`
  @media ${mq.sm} {
    grid-column: span 3;
  }
`

const SliceWrap = styled.div`
  margin-bottom: ${props => props.theme.margins.large};
`
export default {
  Intro,
  Deliverables,
  SliceWrap,
  Desc,
}
