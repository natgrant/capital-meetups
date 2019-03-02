const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./client/index.js",

  output: {
    path: path.resolve("public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  devtool: "source-map",

  mode: "development",
  plugins: [new ExtractTextPlugin("css/mystyles.css")]
};
