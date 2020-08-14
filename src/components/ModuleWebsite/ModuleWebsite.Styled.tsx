import styled from 'styled-components'
import { colors } from 'style'

const BrowserBackground = styled.div<{ backgroundColor?: string }>`
  background: ${props => props.backgroundColor || colors.primary};
  grid-column: span 6;
`

const Browser = styled.div`
  margin: 10%;
  svg {
    display: block;
    width: 100%;
    position: relative;
    margin-bottom: -1px;
  }
`

export default {
  BrowserBackground,
  Browser,
}
