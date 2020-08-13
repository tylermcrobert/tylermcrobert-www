import styled from 'styled-components'
import { mq, size } from 'style'
import Grid from 'components/Grid/Grid'
import Paragraph from 'components/Paragraph/Paragraph'

const Intro = styled(Grid)`
  padding-top: ${size.large};
  margin-top: 0;
  h2 {
    max-width: 11.5em;
    @media ${mq.sm} {
      margin-bottom: ${size[-2]};
    }
  }
`

const Deliverables = styled.div`
  p:first-child {
    text-indent: 2rem;
  }
  @media ${mq.sm} {
    grid-column: span 3;
    max-width: 16em;
    p:first-child {
      text-indent: 0;
      margin-bottom: ${size[-2]};
    }
  }
`

const Desc = styled(Paragraph)`
  @media ${mq.sm} {
    grid-column: span 3;
  }
`

export default {
  Intro,
  Deliverables,
  Desc,
}
