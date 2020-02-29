import styled from "styled-components"
import { Grid, Paragraph } from "components"
import { mq } from "style"

const Intro = styled(Grid)`
  padding-top: ${props => props.theme.margins.large};
  margin-top: 0;

  h2 {
    max-width: 11.5em;

    @media ${mq.sm} {
      margin-bottom: ${props => props.theme.remScale[0]};
    }
  }
`

const Deliverables = styled.div`
  @media ${mq.sm} {
    grid-column: span 3;
    max-width: 16em;

    p:first-child {
      text-indent: none;
      margin-bottom: ${props => props.theme.remScale[0]};
    }
  }

  p:first-child {
    text-indent: 2rem;
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
