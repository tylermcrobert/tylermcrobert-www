/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

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
    const contextUids = data.case_study_list.map(
      item => item.case_study_item.uid
    )

    // ctx landing page
    createPage({
      path: `/${uid}`,
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
