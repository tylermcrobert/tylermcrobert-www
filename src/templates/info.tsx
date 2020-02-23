import React from "react"
import { Layout, Seo } from "components"
import { Info as InfoTemplate } from "pageTemplates"
import { StaticQuery, graphql } from "gatsby"
import { IRichText } from "types/prismic"
import { ISpotifyPlaylist } from "types/spotify"
import parseSpotify from "util/parseSpotify"

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

interface IProps {
  pageContext: {
    playlists: ISpotifyPlaylist[]
  }
}

const Info: React.FC<IProps> = ({ pageContext }) => {
  const parsedPlaylists = pageContext.playlists.map(pl => parseSpotify(pl))

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
              <InfoTemplate clients={clients} playlists={parsedPlaylists} />
            </>
          )
        }}
      />
    </Layout>
  )
}

export default Info
