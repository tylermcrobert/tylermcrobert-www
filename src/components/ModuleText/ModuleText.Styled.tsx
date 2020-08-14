import styled from 'styled-components'
import { Paragraph } from 'components'
import { mq } from 'style'

const Text = styled(Paragraph)`
  @media ${mq.sm} {
    grid-column: span 3;
  }
`
const Ghost = styled.div`
  display: none;

  @media ${mq.sm} {
    display: block;
    grid-column: span 3;
  }
`

export default {
  Ghost,
  Text,
}
