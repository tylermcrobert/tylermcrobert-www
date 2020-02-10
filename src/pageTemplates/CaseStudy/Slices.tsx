/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import React from "react"
import {
  CsContentType,
  SingleImageType,
  DoubleImageType,
  TripleImageType,
} from "templates/casestudy"
import Styled from "./Styled"

interface IProps {
  data: CsContentType
}
const Slices: React.FC<IProps> = ({ data }) => {
  return (
    <>
      {data
        .map(item => {
          switch (item.__typename) {
            case "PrismicCaseStudyCsContentSingleImage":
              return <SingleImage data={item as SingleImageType} />
            case "PrismicCaseStudyCsContentDoubleImageBlock":
              return <DoubleImage data={item as DoubleImageType} />
            case "PrismicCaseStudyCsContentTripleImageBlock":
              return <TripleImage data={item as TripleImageType} />
            default:
              return <div>asdf</div>
          }
        })
        .map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={i}>{item}</React.Fragment>
        ))}
    </>
  )
}

/**
 * Single Image
 */

interface ISingleImageProps {
  data: SingleImageType
}

const SingleImage: React.FC<ISingleImageProps> = ({ data }) => {
  const { url } = data.primary.image
  return (
    <Styled.ImageWrapper>
      <img src={url} alt="" />
    </Styled.ImageWrapper>
  )
}

/**
 * Double image
 */
interface IDoubleImageProps {
  data: DoubleImageType
}

const DoubleImage: React.FC<IDoubleImageProps> = ({ data }) => {
  const {
    left_image: { url: leftUrl },
    right_image: { url: rightUrl },
  } = data.primary

  return (
    <Styled.DoubleImageWrapper>
      <img src={leftUrl} alt="" />
      <img src={rightUrl} alt="" />
    </Styled.DoubleImageWrapper>
  )
}

interface ITripleImageProps {
  data: TripleImageType
}

const TripleImage: React.FC<ITripleImageProps> = ({ data }) => {
  const {
    main_image: { url: mainImageUrl },
    secondary_image_1: { url: secondaryImage1 },
    secondary_image_2: { url: secondaryImage2 },
    main_image_position: position,
  } = data.primary

  const isMainOnRight = position === "Right"

  return (
    <Styled.TripleImageWrapper invert={isMainOnRight}>
      <div>
        <img src={secondaryImage1} alt="" />
        <img src={secondaryImage2} alt="" />
      </div>
      <div>
        <img src={mainImageUrl} alt="" />
      </div>
    </Styled.TripleImageWrapper>
  )
}

export default Slices
