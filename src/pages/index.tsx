import { NextPage } from "next"
import { CaseStudyPicker, Seo } from "components"

const Home: NextPage = () => {
  return (
    <>
      <Seo title={null} />
      <CaseStudyPicker />
    </>
  )
}

export default Home
