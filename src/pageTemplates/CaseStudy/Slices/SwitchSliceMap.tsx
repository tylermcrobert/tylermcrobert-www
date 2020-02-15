/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from "react"
import {
  ISlice,
  ISingleImage,
  IDoubleImage,
  ITripleImage,
  IWebsite,
} from "templates/casestudy"

import SingleImage from "./SliceSingleImage"
import DoubleImage from "./SliceDoubleImage"
import TripleImage from "./SliceTripleImage"
import Website from "./SliceWebsite"

interface IProps {
  data: ISlice[]
}
const Slices: React.FC<IProps> = ({ data }) => {
  return (
    <>
      {data
        .map(item => {
          switch (item.__typename) {
            case "PRISMIC_Case_studyCs_contentSingle_image":
              return <SingleImage data={item as ISingleImage} />
            case "PRISMIC_Case_studyCs_contentDouble_image_block":
              return <DoubleImage data={item as IDoubleImage} />
            case "PRISMIC_Case_studyCs_contentTriple_image_block":
              return <TripleImage data={item as ITripleImage} />
            case "PRISMIC_Case_studyCs_contentWebsite":
              return <Website data={(item as unknown) as IWebsite} />
            default:
              console.log(item.__typename)

              return null
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
