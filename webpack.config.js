module.exports = { 
  mode: 'production', 
  entry: './src/index.js', 
  output: { 
    publicPath: 'assets/', 
    path: __dirname + '/build/assets', 
    filename: 'bundle.js' 
  }, 
  devtool: '#sourcemap', 
  module: { 
    rules: [ 
      { 
        test: /\.jsx?$/, 
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
              modules: true
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
