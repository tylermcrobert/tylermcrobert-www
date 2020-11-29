/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-param-reassign */

const path = require('path')
require('dotenv').config()

module.exports = {
  /**
   * For absolute imports
   */
  webpack(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.join('src'), path.join(__dirname, 'node_modules'), './'],
        extensions: ['.tsx', '.ts', '.js'],
      },
    }
  },

  env: {
    SANITY_TOKEN: process.env.SANITY_TOKEN,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  },
}
