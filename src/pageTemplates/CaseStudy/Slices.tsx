/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import React from "react"
import {
  CsContentType,
  SingleImageType,
  DoubleImageType,
} from "templates/casestudy"

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
  return <img src={url} alt="" />
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
    <div>
      <img src={leftUrl} alt="" />
      <img src={rightUrl} alt="" />
    </div>
  )
}

export default Slices
