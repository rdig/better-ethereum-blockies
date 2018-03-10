const path = require('path');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const minimize = process.argv.indexOf('--optimize-minimize') !== -1;

module.exports = {
  entry: './src/index.js',
  mode,
  output: {
    filename: minimize ? 'betterEthereumBlockies.min.js' : 'betterEthereumBlockies.js',
    path: path.resolve('.', 'lib/umd'),
    library: 'betterEthereumBlockies',
    libraryTarget: 'umd',
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  optimization: {
    minimize: minimize ? true : false,
  },
};
