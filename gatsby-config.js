/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "tylermcrobert", // (required)
        previews: true, // (optional, default: false)
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}
