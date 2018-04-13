
const path = require('path');

module.exports = {
  entry: './source/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js',
    publicPath: '/js/',
  },

};
