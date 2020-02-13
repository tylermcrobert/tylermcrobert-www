import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${props => props.theme.margins.gutter};
  padding: 0 ${props => props.theme.margins.standard};
  margin: 0 auto;
  max-width: 60rem;
`
