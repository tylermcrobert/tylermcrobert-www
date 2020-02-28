import Prismic from "prismic-javascript"
import { NextPage } from "next"
import { IPrismicCaseStudyRes } from "../../types/api/PrismicApiCaseStudy"

import { Client } from "../util/prismic"
import formatCaseStudy from "../middleware/caseStudy"

interface IProps {
  caseStudiesRes: IPrismicCaseStudyRes
}

const Home: NextPage<IProps> = ({ caseStudiesRes }) => {
  const formatted = caseStudiesRes.results.map(csRes => formatCaseStudy(csRes))

  return (
    <div>
      {formatted.map(({ uid, title, deliverables, Description, Intro }) => {
        return (
          <div key={uid}>
            <h1>{title}</h1>
            <h2>
              <Intro />
            </h2>
            <Description />

            <p>{deliverables.join(", ")}</p>
            <hr />
          </div>
        )
      })}
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
