import styled from "styled-components"
import { Grid } from "components"
import { mq } from "style"

const Wrapper = styled(Grid)`
  grid-row-gap: 1rem;
`

const Col = styled.div`
  grid-column: span 6;
`

const Title = styled(Col)`
  margin-top: ${props => props.theme.margins.large};
`

const Intro = styled(Col)`
  @media ${mq.xs} {
    margin-bottom: ${props => props.theme.remScale[0]};
  }
`

const IntroWrapper = styled.div`
  max-width: 13em;
`

const Breakdown = styled(Col)`
  @media ${mq.xs} {
    grid-column: span 3;
  }
`

const Deliverables = styled(Breakdown)`
  @media ${mq.xs} {
    max-width: 16em;
  }

  p {
    text-indent: 2em;

    @media ${mq.xs} {
      text-indent: 0;
      margin-bottom: ${props => props.theme.remScale[0]};
    }
  }
`

export default {
  Title,
  Intro,
  IntroWrapper,
  Breakdown,
  Deliverables,
  Wrapper,
}
