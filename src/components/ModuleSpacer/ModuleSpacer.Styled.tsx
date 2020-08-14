import styled from 'styled-components'
import { mq } from 'style'

const Spacer = styled.div`
  display: none;

  @media ${mq.sm} {
    display: block;
    grid-column: span 3;
  }
`

export default {
  Spacer,
}
