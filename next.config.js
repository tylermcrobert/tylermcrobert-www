const Prismic = require("prismic-javascript")
const path = require("path")
require("dotenv").config()

async function getUids(type, api) {
  const res = await api.query(Prismic.Predicates.at("document.type", type))
  return res.results.map(result => result.uid)
}

const createPaths = (input, page) =>
  input.reduce(
    (acc, cur) => ({
      [`/${cur}`]: { page, query: { page: cur } },
      ...acc,
    }),
    {}
  )

module.exports = {
  // For absolute imports
  webpack(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.join("src"), path.join(__dirname, "node_modules"), "./"],
        extensions: [".tsx", ".ts", ".js"],
      },
    }
  },

  async exportPathMap() {
    const apiEndpoint = "https://tylermcrobert.cdn.prismic.io/api/v2"
    const accessToken = ""
    const api = await Prismic.getApi(apiEndpoint, { accessToken })

    const csUids = await getUids("case_study", api)
    const csPaths = createPaths(csUids, "/[page]")

    const curationUids = await getUids("context", api)
    const curationPaths = createPaths(curationUids, "/[page]")

    return {
      "/": { page: "/" },
      "/info": { page: "/info" },
      "/preview": { page: "/preview" },
      ...csPaths,
      ...curationPaths,
    }
  },

  env: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  },
}
