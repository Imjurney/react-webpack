// const path = require("path");
// const nodeExternals = require("webpack-node-externals");
// /** @type {import('webpack').Configuration} */

// module.exports = {
//   target: "node",
//   mode: "development",
//   entry: path.resolve(__dirname, "server/index.tsx"),
//   resolve: {
//     extensions: [".ts", ".tsx", ".js"],
//   },
//   output: {
//     filename: "[name].js",
//     path: path.resolve(__dirname, "dist/server"),
//   },
//   module: {
//     rules: [
//       {
//         test: [/\.js$/, /\.ts$/, /\.tsx$/],
//         use: ["babel-loader", "ts-loader"],
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   externals: [
//     nodeExternals({
//       allowlist: [/@babel/],
//     }),
//   ],
// };
