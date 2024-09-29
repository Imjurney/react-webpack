const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/** @type {import('webpack').Configuration} */
module.exports = {
  devServer: {
    hot: true,
    host: "localhost",
    port: 3001,
  },

  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "/dist/client"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.ts$/, /\.tsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
