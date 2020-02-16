import styled from "styled-components"
import { Wrapper } from "components"

export const Grid = styled(Wrapper)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${props => props.theme.margins.gutter};
`
