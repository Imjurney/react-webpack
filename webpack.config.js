// webpack.config.js
const path = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const { devServer } = require("./webpack.client");
module.exports = [
  {
    name: "server",
    target: "node",
    mode: "development",
    entry: "./server/index.tsx",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist/server"),
    },
    module: {
      rules: [
        {
          test: [/\.js$/, /\.ts$/, /\.tsx$/],
          use: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    externals: [
      nodeExternals({
        allowlist: [/@babel/],
      }),
    ],
  },
  // {
  //   mode: "development",
  //   name: "server",
  //   target: "node",
  //   externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  //   entry: ["webpack/hot/poll?100", "./server/index.tsx"],
  //   output: {
  //     path: path.resolve(__dirname, "dist"),
  //     filename: "server.js",
  //   },
  //   plugins: [
  //     new webpack.HotModuleReplacementPlugin(),
  //     new HtmlWebpackPlugin({
  //       template: "./public/index.html",
  //     }),
  //   ],
  //   module: {
  //     rules: [
  //       {
  //         test: [/\.js$/, /\.ts$/, /\.tsx$/],
  //         exclude: /node_modules/,
  //         use: {
  //           loader: "babel-loader",
  //         },
  //       },
  //     ],
  //   },
  //   resolve: {
  //     extensions: [".ts", ".tsx", ".js"],
  //   },
  // },
  {
    name: "client",
    mode: "development",
    target: ["web", "es5"],
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "client.js",
      publicPath: "/",
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
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 3090,
      open: true,
    },
  },
];
