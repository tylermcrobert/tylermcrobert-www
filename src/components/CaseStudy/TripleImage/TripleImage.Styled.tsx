import styled from "styled-components"
import { mq } from "style"

const LargeImg = styled.img`
  @media ${mq.sm} {
    grid-column: span 3;
    height: 100%;
    object-fit: cover;
  }
`

const Partition = styled.div`
  @media ${mq.sm} {
    grid-column: span 3;
  }
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${props => props.theme.margins.standard};
`

export default {
  LargeImg,
  Partition,
}
