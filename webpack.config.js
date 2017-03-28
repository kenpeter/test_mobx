// check node environment
// production or test....
var debug = process.env.NODE_ENV !== "production";
// yes, we need webpack
var webpack = require('webpack');
// path.resolve
var path = require('path');

// we export an obj
module.exports = {
  // src/js/main.js......
  // context
  context: path.join(__dirname, "src"),
  // if node_env debug, use inline source map
  devtool: debug ? "inline-sourcemap" : null,
  // entry main.js
  entry: "./js/main.js",
  // module
  module: {
    // loaders is an array with lots of loader
    loaders: [
      {
        // babel loader
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      // style and css loader
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  output: {
    // output to ./src/main.min.js
    path: path.join(__dirname, "src"),
    //  output main.min.js
    filename: "main.min.js"
  },
  // plugins not debug, so ...
  plugins: debug ? [] : [
    // no duplicate
    new webpack.optimize.DedupePlugin(),
    // a bit of order
    new webpack.optimize.OccurenceOrderPlugin(),
    // ugly
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
