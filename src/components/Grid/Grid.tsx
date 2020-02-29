import styled from "styled-components"
import Wrapper from "../Wrapper"

export const Grid = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${props => props.theme.margins.gutter};

  > * {
    grid-column: span 6;
  }
`
