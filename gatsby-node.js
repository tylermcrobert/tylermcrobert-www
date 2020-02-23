/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
require("dotenv").config({
  path: `.env`,
})

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

/**
 * Fetches API token using Spotify's
 * Client Credentials Flow
 * https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */

const getAuthToken = async () => {
  const authFormatted = `${clientId}:${clientSecret}`
  const base64Auth = Buffer.from(authFormatted).toString("base64")

  const data = await fetch(
    "https://accounts.spotify.com/api/token?grant_type=client_credentials",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${base64Auth}`,
      },
    }
  )
    .then(res => res.json())
    .catch(err => console.log(err))

  return data.access_token
}

/**
 * Get Spotify Playlist
 */
const getPlaylist = async ({ id, token }) => {
  const data = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => res.json())

  return data
}

// Absolute imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.join("src"), path.join(__dirname, "node_modules")],
    },
  })
}

// Create pages
exports.createPages = async function createPages({
  actions: { createPage },
  graphql,
}) {
  const contexts = await graphql(`
    {
      prismic {
        allContexts {
          edges {
            node {
              _meta {
                uid
              }
              case_study_list {
                case_study_item {
                  ... on PRISMIC_Case_study {
                    _meta {
                      uid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => result.data.prismic.allContexts.edges)

  // loop through contexts
  contexts.forEach(contextDoc => {
    const { uid } = contextDoc.node._meta

    const contextUids = contextDoc.node.case_study_list
      .map(item => item.case_study_item)
      .filter(item => !!item)
      .map(item => item._meta.uid)

    // ctx landing page
    createPage({
      // if uid is 'homepage', use it for root
      path: uid === "homepage" ? "/" : `/${uid}`,
      component: path.resolve("src/templates/homepage.tsx"),
      context: {
        uid,
      },
    })

    // create pages for ctx uids
    contextUids.forEach(contextUid => {
      createPage({
        path: `/${contextUid}`,
        component: path.resolve("src/templates/casestudy.tsx"),
        context: {
          uid: contextUid,
          context: uid,
        },
      })
    })
  })

  // Spotify playlists

  const token = await getAuthToken()

  const PLAYLISTS = [
    "5fve4KDdKM9QMciHt779cY",
    "2ml6R8vbhpSQDIVYbupJPL",
    "5iibda0SvRRNw0GPyQHx01",
    "4U8279jSqmrxcqU2PyZNH6",
    "3NZb00czzNax0Xns0Uvvf5",
  ]

  const playlistData = await Promise.all(
    PLAYLISTS.map(id =>
      getPlaylist({
        token,
        id,
      })
    )
  )

  createPage({
    path: `/playlist`,
    component: path.resolve("src/templates/playlists.tsx"),
    context: {
      data: playlistData,
    },
  })
}
