import React from "react"
import { Layout, Seo } from "components"
import { Homepage } from "../pageTemplates"

interface IProps {
  pageContext: { uid: string }
  location: { search: string }
}
const HomepageContainer: React.FC<IProps> = ({ pageContext, location }) => {
  return (
    <Layout>
      <Seo title={null} />
      <Homepage />
    </Layout>
  )
}

export default HomepageContainer
