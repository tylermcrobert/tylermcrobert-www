import styled from 'styled-components'
import mq from 'style/mq'

const Img = styled.img<{ isHalf: boolean }>`
  @media ${mq.sm} {
    grid-column: ${p => p.isHalf && 'span 3'};
  }
`

export default {
  Img,
}
