import React from "react"
import { Layout, Seo } from "components"
import Cookies from "js-cookie"
import { Homepage } from "../pageTemplates"
import { DEFAULT_CTX } from "../constants"

interface IProps {
  pageContext: { uid: string }
  location: { search: string }
}
const HomepageContainer: React.FC<IProps> = ({ pageContext, location }) => {
  if (pageContext.uid !== DEFAULT_CTX) {
    Cookies.set("curation", pageContext.uid)
  }
  return (
    <Layout>
      <Seo title={null} />
      <Homepage />
    </Layout>
  )
}

export default HomepageContainer
