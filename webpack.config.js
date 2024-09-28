// webpack.config.js
const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { devServer } = require("./webpack.client");
module.exports = [
  {
    name: "server",
    target: "node",
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    entry: ["webpack/hot/poll?100", "./server/index.tsx"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "server.js",
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
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
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
  },
  {
    name: "client",
    target: "web",
    entry: "./src/index.tsx",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      compress: true,
      port: 3000,
      publicPath: "/",
      historyApiFallback: true,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "client.js",
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
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
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
  },
];
