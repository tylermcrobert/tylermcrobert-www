import styled from "styled-components"

interface IImageWrapperProps {
  invert?: boolean
}

const ImageWrapper = styled.div<IImageWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.invert ? "row-reverse" : "row")};
  grid-column: span 6;

  img {
    width: 100%;
  }
`

const DoubleImage = styled(ImageWrapper)`
  grid-column: span 3;
`

const TripleImageWrapper = styled(ImageWrapper)`
  > div {
    width: 50%;
    flex-basis: 50%;
  }
`

export default {
  ImageWrapper,
  DoubleImage,
  TripleImageWrapper,
}
