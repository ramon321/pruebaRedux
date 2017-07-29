var path = require('path');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    root: [
      path.resolve('./src')
    ],
    extensions: ['', '.js', '.jsx'],
    alias: {
      utils: 'Utils/index.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
};
