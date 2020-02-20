import React from "react"
import { Layout, Seo } from "components"
import { Info as InfoTemplate } from "pageTemplates"
import { StaticQuery, graphql } from "gatsby"
import { IRichText } from "types/prismic"

const query = graphql`
  {
    prismic {
      allInfos(first: 1) {
        edges {
          node {
            introduction
            support
            clients
          }
        }
      }
    }
  }
`

interface IInfoQuery {
  prismic: {
    allInfos: {
      edges: {
        node: {
          introduction: IRichText
          support: IRichText
          clients: string
        }
      }[]
    }
  }
}

const Info = () => {
  return (
    <Layout>
      <StaticQuery
        query={query}
        render={(data: IInfoQuery) => {
          const info = data.prismic.allInfos.edges[0].node
          const clients = info.clients.split("\n")

          return (
            <>
              <Seo title="Info" />
              <InfoTemplate clients={clients} />
            </>
          )
        }}
      />
    </Layout>
  )
}

export default Info
