const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = [
  merge(common, {
    context: __dirname,
    name: "server",
    target: "node",
    mode: "development",
    entry: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:3090",
      "webpack/hot/only-dev-server",
      "./server/index.tsx",
    ],
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist/server"),
    },
    externals: [
      nodeExternals({
        allowlist: [/@babel/],
      }),
    ],
  }),
  merge(common, {
    name: "client",
    mode: "development",
    target: ["web", "es5"],
    entry: "/src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "client.js",
      publicPath: "/",
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development"),
        },
      }),

      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    devServer: {
      hot: true,
      historyApiFallback: true,
      compress: true,
      port: 3000,
      open: true,
    },
  }),
];
