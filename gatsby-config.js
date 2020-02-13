/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `tylermcrobert`,
        // linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "tylermcrobert", // (required)
        previews: true, // (optional, default: false)
      },
    },
  ],
}
