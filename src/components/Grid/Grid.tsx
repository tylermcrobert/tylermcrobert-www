import styled from "styled-components"
import Wrapper from "../Wrapper"

export const Grid = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${props => props.theme.margins.gutter};
  margin: ${props => props.theme.margins.gutter} auto;

  > * {
    grid-column: span 6;
  }
`
