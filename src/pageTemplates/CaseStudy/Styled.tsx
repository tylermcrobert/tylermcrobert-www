import styled, { css } from "styled-components"

const ImageWrapper = styled.div<{ number: number }>`
  display: flex;
  flex-wrap: wrap;

  img {
    max-width: 100%;
  }

  ${props =>
    props.number === 2 &&
    css`
      img {
        width: 50%;
        flex-basis: 50%;
      }
    `}
`

export default {
  ImageWrapper,
}
