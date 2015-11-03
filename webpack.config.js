var path = require('path'),
    webpack = require('webpack'),
    env = process.env.ENV,
    plugins = env === 'production' ? [new webpack.optimize.UglifyJsPlugin({minimize:true})] : [],
    main = './src/main',
    entry = env === 'production' ? {'xhrEvents.min': main} : {'xhrEvents': main};

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /(node_modules|bower_components)/ },
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  resolve: {
    root: path.join(__dirname, 'components'),
    extensions: ['', '.js']
  },
  devtool: 'eval',
  plugins: plugins
};
