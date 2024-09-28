const express = require("express");
const path = require("path");
const ReactDomServer = require("react-dom/server");
const fs = require("fs");
const App = require("../src/App").default;
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotServerMiddleware = require("webpack-hot-server-middleware");
const config = require("../webpack.config.js");
const app = express();
const compiler = webpack(config);
const html = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), "utf-8");

app.get("*", (req: any, res: { send: (arg0: string) => void }) => {
  const html = ReactDomServer.renderToString(<App />);
  res.send(`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My React App</title>
    <script defer src="index_bundle.js"></script>
  </head>
  <body>
     <div id="root">${html}</div>
  </body>
</html>
  `);
});

// app.listen(3000);

app.get("/", (req: any, res: { send: (arg0: any) => void }) => {
  const renderedApp = ReactDomServer.renderToString(<App />);
  const finalHtml = html.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);
  res.send(finalHtml);
});

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config[1].output.publicPath, // client configuration
  })
);

app.use(webpackHotServerMiddleware(compiler));

app.use("/", express.static("dist/client"));
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
