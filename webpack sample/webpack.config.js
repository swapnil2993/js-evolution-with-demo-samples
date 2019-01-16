const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    noParse: /node_modules\/lodash\/lodash\.js/,
  }
};

// npx webpack --config webpack.config.js
