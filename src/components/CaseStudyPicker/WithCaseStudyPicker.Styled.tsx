import styled from 'styled-components'
import { colors } from 'style'

const Wrapper = styled.div`
  border-bottom: 1px dashed ${colors.primary};
  margin-bottom: 100vh;
  position: relative;
  z-index: 20;
  background: ${colors.secondary};
`

export default {
  Wrapper,
}
