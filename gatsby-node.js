/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

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
}
