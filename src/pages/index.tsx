import { Fragment } from "react"
import Prismic from "prismic-javascript"
import { NextPage } from "next"
import { Client } from "util/prismic"
import {
  IPrismicCaseStudyRes,
  ICaseStudy,
  Slice,
} from "types/api/PrismicApiCaseStudy"
import { asText, RichText } from "util/richText"

interface IProps {
  caseStudiesRes: IPrismicCaseStudyRes
}

const Home: NextPage<IProps> = ({ caseStudiesRes }) => {
  return (
    <div>
      {caseStudiesRes.results.map(item => (
        <CaseStudy data={item} />
      ))}
    </div>
  )
}

const CaseStudy: React.FC<{ data: ICaseStudy }> = ({ data: { data } }) => {
  const title = asText(data.title)
  const { deliverables, intro, description, cs_content: slices } = data

  return (
    <div>
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
    </div>
  )
}

const Slices: React.FC<{ data: Slice[] }> = ({ data }) => {
  return (
    <>
      {data
        .map(item => {
          const type = item.slice_type
          if (type === "single_image") {
            return <div>IMAGE HERE!!!!!!!!!!</div>
          }
          if (type === "website") {
            return <div>WEBSITE HERE!!!!!!!!!!</div>
          }
          if (type === "text") {
            return <div>TEXT HERE!!!!!!!!!!</div>
          }
          if (type === "double_image_block") {
            return <div>DOUBLE IMAGE BLOCK HERE!!!!!!!!!!</div>
          }
          if (type === "triple_image_block") {
            return <div>TRIPLE IMAGE BLOCK HERE!!!!!!!!!!!!!!!!!!!!!</div>
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

Home.getInitialProps = async ctx => {
  const caseStudiesRes = await Client(ctx.req).query(
    Prismic.Predicates.at("document.type", "case_study"),
    {}
  )

  return { caseStudiesRes }
}

export default Home
