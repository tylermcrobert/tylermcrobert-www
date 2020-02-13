/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from "react"
import {
  CsContentType,
  SingleImageType,
  DoubleImageType,
  TripleImageType,
} from "templates/casestudy"

import SingleImage from "./SliceSingleImage"
import DoubleImage from "./SliceDoubleImage"
import TripleImage from "./SliceTripleImage"

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

export default Slices
