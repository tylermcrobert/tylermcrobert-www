import styled from "styled-components"
import { Grid } from "components"

const LgSection = styled.div`
  margin: 5rem auto;
`

const Section = styled(Grid)`
  margin: ${props => props.theme.remScale[6]} auto;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ul {
    column-count: 2;
    column-gap: ${props => props.theme.margins.standard};
  }
`

const TwoCol = styled.div`
  grid-column: span 3;
`

const Hr = styled.hr`
  border: 0;
  border-bottom: 1px dashed ${props => props.theme.colors.primary};
`

export default {
  Hr,
  LgSection,
  Section,
  TwoCol,
}
