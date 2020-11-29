import styled from 'styled-components'
import { colors, zIndex } from 'style'

const Wrapper = styled.div`
  border-bottom: 1px dashed ${colors.primary};
  margin-bottom: 100vh;
  position: relative;
  z-index: ${zIndex.caseStudyOverlay};
  background: ${colors.secondary};
`

export default {
  Wrapper,
}
