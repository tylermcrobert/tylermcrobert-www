/* eslint-disable @typescript-eslint/camelcase */
import { Fragment } from "react"
import {
  ICaseStudy,
  Slice,
  ISingleImage,
  IDoubleImage,
  ITripleImage,
} from "types/api/PrismicApiCaseStudy"
import { asText, RichText } from "util/richText"

import SingleImage from "./SingleImage/SingleImage"
import DoubleImage from "./DoubleImage/DoubleImage"
import TripleImage from "./TripleImage/TripleImage"

const CaseStudy: React.FC<{ data: ICaseStudy }> = ({ data: { data } }) => {
  const title = asText(data.title)
  const { deliverables, intro, description, cs_content: slices } = data

  return (
    <>
      <h1>{title}</h1>
      <h2>
        <RichText>{intro}</RichText>
      </h2>
      <br />

      <p>{deliverables}</p>
      <br />

      <RichText>{description}</RichText>
      <br />
      <Slices data={slices} />
      <hr />
    </>
  )
}

const Slices: React.FC<{ data: Slice[] }> = ({ data: slices }) => {
  return (
    <>
      {slices
        .map(sliceData => {
          const type = sliceData.slice_type
          const data = sliceData as unknown

          if (type === "single_image") {
            return <SingleImage data={data as ISingleImage} />
          }
          if (type === "double_image_block") {
            return <DoubleImage data={data as IDoubleImage} />
          }
          if (type === "triple_image_block") {
            return <TripleImage data={data as ITripleImage} />
          }
          if (type === "website") {
            return <div>WEBSITE HERE!!!!!!!!!!</div>
          }
          if (type === "text") {
            return <div>TEXT HERE!!!!!!!!!!</div>
          }
          if (type === "text") {
            return <div>TEXT HERE!!!!!!!!!!</div>
          }
          return null
        })
        .map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={i}>{item}</Fragment>
        ))}
    </>
  )
}

export default CaseStudy
