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
            return <Image data={data as ISingleImage} />
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
          <Fragment key={i}>{item}</Fragment>
        ))}
    </>
  )
}

const Image: React.FC<{ data: ISingleImage }> = ({ data }) => {
  return (
    <>
      <img src={data.primary.image.url} />
    </>
  )
}

const DoubleImage: React.FC<{ data: IDoubleImage }> = ({ data }) => {
  return (
    <>
      <img src={data.primary.left_image.url} />
      <img src={data.primary.right_image.url} />
    </>
  )
}

const TripleImage: React.FC<{ data: ITripleImage }> = ({ data }) => {
  const { main_image, secondary_image_1, secondary_image_2 } = data.primary
  return (
    <>
      <img src={main_image.url} />
      <img src={secondary_image_1.url} />
      <img src={secondary_image_2.url} />
    </>
  )
}

export default CaseStudy
