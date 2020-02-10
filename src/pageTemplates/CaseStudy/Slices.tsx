/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import React from "react"
import {
  CsContentType,
  SingleImageType,
  DoubleImageType,
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
    <Styled.ImageWrapper number={1}>
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
    <Styled.ImageWrapper number={2}>
      <img src={leftUrl} alt="" />
      <img src={rightUrl} alt="" />
    </Styled.ImageWrapper>
  )
}

export default Slices
