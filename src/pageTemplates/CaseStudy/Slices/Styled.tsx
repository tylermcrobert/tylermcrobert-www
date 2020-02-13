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

const TripleImageSide = styled.div`
  grid-column: span 3;
  grid-row: 1;

  display: grid;
  grid-gap: ${props => props.theme.margins.gutter};

  img {
    display: block;
    width: 100%;
  }
`

const TripleImageSideLarge = styled(TripleImageSide)<{ isRight?: boolean }>`
  grid-column: ${props => (props.isRight ? "1 / " : "")} span 3;

  img {
    height: 100%;
    object-fit: cover;
  }
`

const BrowserBackground = styled.div<{ backgroundColor?: string }>`
  background: ${props => props.backgroundColor || props.theme.colors.primary};
  grid-column: span 6;
`

const Browser = styled.div`
  margin: 10%;
`

export default {
  ImageWrapper,
  DoubleImage,
  TripleImageSide,
  TripleImageSideLarge,
  BrowserBackground,
  Browser,
}
