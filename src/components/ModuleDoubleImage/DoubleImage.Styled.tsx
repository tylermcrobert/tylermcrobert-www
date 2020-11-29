import styled from 'styled-components'
import { mq } from 'style'

const Img = styled.div`
  @media ${mq.sm} {
    grid-column: span 3;
  }
`

export default {
  Img,
}
