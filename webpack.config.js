const path = require('path');

module.exports = {
  entry: './source/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js',
    publicPath: '/js/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['env'] },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'file-loader?name=../css/[name].css',
          {
            loader: 'sass-loader',
            options: { outputStyle: 'compressed' },
          },
        ],
      },
    ],
  },
};
