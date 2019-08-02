const webpack = require('webpack')

module.exports = { 
  mode: 'development', 
  entry: [ 'webpack-dev-server/client/?http://localhost:8080', './src/index.js' ], 
  output: { 
    publicPath: 'assets/', 
    path: __dirname + '/build/assets', 
    filename: 'bundle.js' 
  }, 
  devtool: '#sourcemap', 
  devServer: { 
    contentBase: './public', 
    hot: true }, 
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ], 
  module: { 
    rules: [ 
      { 
        test: /\.js$/, 
        exclude: /(node_modules)/, 
        loaders: [ 'babel-loader' ] 
      }, 
      { 
        test: /\.css$/, 
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // enable CSS Modules https://github.com/webpack-contrib/css-loader
              // concept: https://github.com/css-modules/css-modules
              modules: {
                mode: "local",
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            },
          }
        ]
      }, 
      { 
        test: /\.wav$/, 
        loader: 'file-loader' 
      } 
    ] 
  } 
}
