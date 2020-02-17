import React from "react"
import { Layout, Seo } from "components"
import { parseSearch } from "components/ClientContextProvider"
import { Homepage } from "../pageTemplates"

interface IProps {
  pageContext: { uid: string }
  location: { search: string }
}
const HomepageContainer: React.FC<IProps> = ({ pageContext, location }) => {
  return (
    <Layout ctx={pageContext.uid || parseSearch(location.search)}>
      <Seo title={null} />
      <Homepage />
    </Layout>
  )
}

export default HomepageContainer
