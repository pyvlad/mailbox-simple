#!/bin/bash

# DESCRIPTION
# Bash Script to Set Up a React App with Webpack and HMR

# PREREQUISITES
# npm, node, json package (npm)
# install node and npm (see PPA option):
# https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04


# commands which fail should cause the shell script to exit immediately
set -e

PROJECT_NAME=$1
JS_BUNDLE_FILE="bundle.js"
BUILD_FOLDER="build"

# 1. Create project folder and set up git repo
mkdir $PROJECT_NAME
cd $PROJECT_NAME
git init
echo '/node_modules' > .gitignore
echo '/build' >> .gitignore
echo '/docs' >> .gitignore

# 2. Set up "public" folder and entry point index.html
mkdir public
mkdir public/assets
echo '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <div id="root"></div>
  <script src="assets/'"$JS_BUNDLE_FILE"'"></script>
</body>
</html>
' > public/index.html

# 3. Set up "src" folder and entry point index.js
mkdir src
echo "import React from 'react'
import ReactDOM from 'react-dom'

const App = () => <h1>My New App</h1>
ReactDOM.render(<App />, document.getElementById('root'))
" > src/index.js

# 4. Create package.json:
npm init -y
json --in-place -f package.json -e 'this.name="'"$PROJECT_NAME"'"'

# 5. Install React and React-DOM
npm install --save-dev react react-dom

# 6. Set up Babel 
# Babel is a transpiler, it lets you run modern JS code and JSX 
# and then transform it into plain JS that can run in older browsers
npm install --save-dev @babel/core @babel/preset-react
json --in-place -f package.json -e 'this.babel={"presets": ["@babel/preset-react"]}'

# 7. Set up Webpack and add build toolchain
# Webpack is a bundler, it lets you write modular code and then bundle it together

# 7.1. Install npm packages for production
npm install -D webpack
npm install -D webpack-cli

# Webpack uses loaders to process different types of files for bundling
# https://webpack.js.org/loaders/
# (Loaders are activated by using loadername! prefixes in require() statements, 
# or are automatically applied via regex from your webpack configuration)
npm install -D babel-loader
npm install -D style-loader # Add exports of a module as style to DOM
npm install -D css-loader   # Loads CSS file with resolved imports and returns CSS code
npm install -D file-loader  # Emits the file into the output folder and returns the (relative) URL

# 7.2. Add production build toolchain
WEBPACK_CONTENT="module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    publicPath: 'assets/',
    path: __dirname + '/$BUILD_FOLDER/assets',
    filename: '$JS_BUNDLE_FILE'
  },
  devtool: '#sourcemap',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: [
            'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.wav$/,
        loader: 'file-loader'
      }
    ]
  }
}"
echo $WEBPACK_CONTENT > webpack.config.js
json --in-place -f package.json -e "this.scripts = {
    'build': 'rm -rf ./$BUILD_FOLDER && cp -r public ./$BUILD_FOLDER && ./node_modules/.bin/webpack -w'
}"
    
# 7.3. Add development environment with HMR
npm install -D react-hot-loader
npm install -D webpack-dev-server

WEBPACK_DEV_CONTENT="const webpack = require('webpack')\n
module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client/?http://localhost:8080',
    './src/index.js'
  ],
  output: {
    publicPath: 'assets/',
    path: __dirname + '/$BUILD_FOLDER/assets',
    filename: '$JS_BUNDLE_FILE'
  },
  devtool: '#sourcemap',
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: [
            'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.wav$/,
        loader: 'file-loader'
      }
    ]
  }
}"
echo $WEBPACK_DEV_CONTENT > webpack.dev.config.js
json --in-place -f package.json -e "this.scripts.start='./node_modules/webpack-dev-server/bin/webpack-dev-server.js --config webpack.dev.config.js'"
