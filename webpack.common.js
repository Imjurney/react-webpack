const path = require("path");
module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
    extensions: [".ts", ".tsx", ".js"],
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
};
