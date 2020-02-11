import styled from "styled-components"

const ColorBlock = styled.div<{ background: string }>`
  background: ${props => props.background};
  padding: ${props => props.theme.remScale[4]} 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${props => props.theme.margins.standard};
  margin: ${props => props.theme.margins.standard} auto;
  padding: 0 ${props => props.theme.margins.standard};
  max-width: 50rem;
`

const Indent = styled.div`
  text-indent: 2em;
`
const Span = styled.div`
  grid-column: 3 / span 3;
`

const Text = styled.div`
  grid-column: 2 / span 2;
`

const Left = styled.div`
  grid-column: span 2;
`

export default {
  ColorBlock,
  Grid,
  Indent,
  Span,
  Text,
  Left,
}
