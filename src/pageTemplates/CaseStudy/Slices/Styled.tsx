import styled from "styled-components"

interface IImageWrapperProps {
  invert?: boolean
}

const ImageWrapper = styled.div<IImageWrapperProps>`
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
  position: relative;

  img {
    position: absolute;
    top: 0;
    left: 0;
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

const ParagraphWrapper = styled.div`
  grid-column: 4 / span 3;

  &:nth-child(odd) {
    grid-column: 1 / span 3;
  }
`

export default {
  ImageWrapper,
  DoubleImage,
  TripleImageSide,
  TripleImageSideLarge,
  BrowserBackground,
  Browser,
  ParagraphWrapper,
}
