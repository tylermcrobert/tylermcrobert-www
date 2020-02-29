import styled from "styled-components"

const LargeImg = styled.img`
  grid-column: span 3;
  height: 100%;
  object-fit: cover;
`

const Partition = styled.div`
  grid-column: span 3;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${props => props.theme.margins.standard};
`

export default {
  LargeImg,
  Partition,
}
