module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'vue-router.js',
    library: 'VueRouter',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /.js/,
        exclude: /node_modules/,
        loader: 'babel?optional[]=runtime&loose=true'
      }
    ]
  },
  devtool: '#source-map'
}
