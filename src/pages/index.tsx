import Prismic from "prismic-javascript"
import { NextPage } from "next"
import { IPrismicCaseStudyRes } from "../../types/api/PrismicApiCaseStudy"

import { Client } from "../util/prismic"

interface IProps {
  caseStudiesRes: IPrismicCaseStudyRes
}

const Home: NextPage<IProps> = ({ caseStudiesRes }) => {
  console.log(
    caseStudiesRes.results.map(res =>
      res.data.cs_content.map(item => item.primary)
    )
  )

  return <div>hello world</div>
}

Home.getInitialProps = async ctx => {
  const caseStudiesRes = await Client(ctx.req).query(
    Prismic.Predicates.at("document.type", "case_study"),
    {}
  )

  return { caseStudiesRes }
}

export default Home
