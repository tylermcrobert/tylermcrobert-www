import styled from "styled-components"
import { Grid, Paragraph } from "components"

const Intro = styled(Grid)`
  margin-top: ${props => props.theme.margins.large};
  margin-bottom: ${props => props.theme.margins.gutter};

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
  grid-column: span 3;
`

export default {
  Intro,
  Deliverables,
  Desc,
}
