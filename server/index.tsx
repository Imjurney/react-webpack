const express = require("express");
const path = require("path");
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import { Request, Response, NextFunction } from "express";
const { renderToString } = require("react-dom/server");
// import { renderToPipeableStream, renderToReadableStream, renderToString } from "react-dom/server";
// import ReactDomServer from "react-dom/server";

const fs = require("fs");
const App = require("../src/App").default;
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../webpack.config");
const app = express();
app.set("view engine", "pug"); //express에게, 동적 템플릿을 pug으로 컴파일 하라고 알려주고
app.set("views", path.join(__dirname, "views"));
const compiler = webpack(config);
// const html = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), "utf-8");
// app.use(express.static(path.join(__dirname, "../public")));
// s
const context = {};
const sheet = new ServerStyleSheet();
const html = renderToString(sheet.collectStyles(<App />));
const styles = sheet.getStyleTags();
sheet.getStyleElement();
try {
  app.get("/", (req: Request, res: Response) => {
    const appString = html;
    res.render("index", {
      styles,
      script: {
        bundle: "client.js",
      },
      appString,
    });
  });
} catch (error) {
  console.error(error);
} finally {
  sheet.seal();
}

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config[1].output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

// async function handler(req: Request, res: Response) {
//   const { pipe, abort } = renderToPipeableStream(<App />, {
//     // bootstrapScripts: ["/client.js"],
//     progressiveChunkSize: 1024,

//     onShellReady() {
//       app.get("/template", (req: Request, rest: Response) => {
//         res.render("temp");
//       });

//       // res.setHeader("content-type", "text/html");
//       pipe(res);
//     },
//   });
//   // const finalHtml = html.replace('<div id="root"></div>', `<div id="root">${stream}</div>`);
//   //   const finalHtml = `
//   //  <html lang="ko">
//   //    <head>
//   //      <meta charset="UTF-8" />
//   //      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   //      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//   //      <title>My React App</title>

//   //     </head>
//   //    <body>
//   //       <div id="root">${stream}</div>
//   //    </body>
//   //  </html>
//   //    `;
//   //   return new Response(finalHtml, {
//   //     headers: { "Content-Type": "text/html" },
//   //   });
// }

// app.get("*", (req: Request, res: Response) => {
//   handler(req, res);
// });

// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config[1].output.publicPath, // client configuration
//   })
// );

// app.use("/", express.static("dist/client"));
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
