import styled from "styled-components"
import { Paragraph } from "components"
import { mq } from "style"

const Text = styled(Paragraph)`
  @media ${mq.sm} {
    grid-column: span 3;
  }
`

export default {
  Text,
}
