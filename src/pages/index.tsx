import Prismic from "prismic-javascript"
import { NextPage } from "next"
import { Client } from "util/prismic"
import { IPrismicCaseStudyRes } from "types/api/PrismicApiCaseStudy"

interface IProps {
  caseStudiesRes: IPrismicCaseStudyRes
}

const Home: NextPage<IProps> = ({ caseStudiesRes }) => {
  return <div>asdfasdfs</div>
}

Home.getInitialProps = async ctx => {
  const caseStudiesRes = await Client(ctx.req).query(
    Prismic.Predicates.at("document.type", "case_study"),
    {}
  )

  return { caseStudiesRes }
}

export default Home
