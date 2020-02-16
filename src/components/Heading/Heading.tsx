import styled from "styled-components"

export const LargeHead = styled.h1`
  font-size: 3.1rem;
`

export const MediumHead = styled.h2`
  font-size: ${props => props.theme.remScale[3]};
`
