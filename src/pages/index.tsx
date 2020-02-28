import Prismic from "prismic-javascript"
import { NextPage } from "next"
import { Client } from "util/prismic"
import { IPrismicCaseStudyRes, ICaseStudy } from "types/api/PrismicApiCaseStudy"
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
  const { deliverables, intro, description } = data

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
      <hr />
    </div>
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
