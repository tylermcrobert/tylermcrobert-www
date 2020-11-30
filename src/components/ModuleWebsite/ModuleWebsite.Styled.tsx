import styled from 'styled-components'
import { colors } from 'style'

const BrowserBackground = styled.div<{ backgroundColor?: string }>`
  background: ${props => props.backgroundColor || colors.primary};
  grid-column: span 6;
  position: relative;
  overflow: hidden;
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

const Content = styled.div`
  position: relative;
  z-index: 1;
`
const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  object-fit: cover;
`

export default {
  Content,
  BackgroundImage,
  BrowserBackground,
  Browser,
}
