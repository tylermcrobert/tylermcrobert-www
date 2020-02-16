import styled from "styled-components"
import { Grid } from "components"

const Wrapper = styled(Grid)`
  margin-bottom: 4rem;
  grid-row-gap: 0;
`

const Col = styled.div`
  grid-column: span 6;
`

const Title = styled(Col)`
  margin-top: ${props => props.theme.remScale[6]};
  margin-bottom: ${props => props.theme.remScale[1]};
`

const Intro = styled(Col)`
  max-width: 35em;
  margin-bottom: ${props => props.theme.remScale[6]};
`
const Breakdown = styled(Col)`
  grid-column: span 3;
`

const Deliverables = styled(Breakdown)`
  max-width: 16em;

  p {
    margin-bottom: ${props => props.theme.remScale[0]};
  }
`

export default {
  Title,
  Intro,
  Breakdown,
  Deliverables,
  Wrapper,
}
