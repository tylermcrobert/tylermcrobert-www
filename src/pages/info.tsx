import React from "react"
import { Layout, Seo } from "components"
import { Info as InfoTemplate } from "pageTemplates"

const Info = () => {
  return (
    <Layout>
      <Seo title="Info" />
      <InfoTemplate />
    </Layout>
  )
}

export default Info
