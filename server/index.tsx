const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");
const app = express();
const { ServerStyleSheet } = require("styled-components");

const { renderToString } = require("react-dom/server");
import { Request, Response, NextFunction } from "express";
import { StaticRouter } from "react-router-dom";

const sslCrtFile = require("dotenv").config().parsed.SSL_CRT_FILE;
const sslKeyFile = require("dotenv").config().parsed.SSL_KEY_FILE;

const App = require("../src/App").default;
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("../webpack.dev");
const axios = require("axios");
const sslCrt = fs.readFileSync(sslCrtFile, "utf-8");
const sslKey = fs.readFileSync(sslKeyFile, "utf-8");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const compiler = webpack(config);

const context = {};
const sheet = new ServerStyleSheet();

function handleRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const html = renderToString(
      sheet.collectStyles(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )
    );
    const styles = sheet.getStyleTags();
    sheet.getStyleElement();
    const appString = html;
    res.render("index", {
      styles,
      script: {
        bundle: "client.js",
      },
      appString,
    });
  } catch (error) {
    next(error);
  }
}

app.get("/", handleRoute);
app.get("/list", handleRoute);
app.get("/mypage", handleRoute);
// app.get("*", (req: Request, res: Response) => {
//   res.redirect("/");
// });
// api 테스트
app.get("/api/users", async (req: Request, res: Response) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  res.json(response.data.slice(0, 10));
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config[1].output.publicPath,
  })
);

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
https
  .createServer(
    {
      key: sslKey,
      cert: sslCrt,
    },
    app
  )
  .listen(3000, () => {
    console.log("HTTPS server running on https://localhost:3000");
  });
