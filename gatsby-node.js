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
      allPrismicContext {
        edges {
          node {
            uid
            data {
              case_study_list {
                case_study_item {
                  uid
                }
              }
            }
          }
        }
      }
    }
  `).then(result => result.data.allPrismicContext.edges)

  // loop through contexts
  contexts.forEach(({ node: { uid, data } }) => {
    const contextUids = data.case_study_list
      .map(item => item.case_study_item)
      .filter(item => !!item)
      .map(item => item.uid)

    console.log(contextUids)

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
