import styled from "styled-components"

interface IImageWrapperProps {
  invert?: boolean
}

const ImageWrapper = styled.div<IImageWrapperProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.invert ? "row-reverse" : "row")};

  img {
    width: 100%;
  }
`

const DoubleImageWrapper = styled(ImageWrapper)`
  img {
    width: 50%;
  }
`

const TripleImageWrapper = styled(ImageWrapper)`
  > div {
    width: 50%;
    flex-basis: 50%;
  }
`

export default {
  ImageWrapper,
  DoubleImageWrapper,
  TripleImageWrapper,
}
