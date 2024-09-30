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
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../webpack.config");

const sslCrt = fs.readFileSync(sslCrtFile, "utf-8");
const sslKey = fs.readFileSync(sslKeyFile, "utf-8");
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const compiler = webpack(config);

const context = {};
const sheet = new ServerStyleSheet();
// const html = (url?: string) => {
//   return renderToString(
//     sheet.collectStyles(
//       <StaticRouter location={url} context={context}>
//         <App />
//       </StaticRouter>
//     )
//   );
// };

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const appString = html(location.home);
//     res.render("index", {
//       styles,
//       script: {
//         bundle: "client.js",
//       },
//       appString,
//     });
//     res.end();
//   } catch (error) {
//     next(error); // 에러를 에러 처리 미들웨어로 전달
//   } finally {
//     sheet.seal();
//   }
// });

// app.get("/list", (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const appString = html(location.list);
//     res.render("index", {
//       styles,
//       script: {
//         bundle: "client.js",
//       },
//       appString,
//     });
//     res.end();
//   } catch (error) {
//     next(error); // 에러를 에러 처리 미들웨어로 전달
//   } finally {
//     sheet.seal();
//   }
// });
// try {
//   app.get("/", (req: Request, res: Response) => {
//     const appString = html;
//     res.render("index", {
//       styles,
//       script: {
//         bundle: "client.js",
//       },
//       appString,
//     });
//     res.end();
//   });
// } catch (error) {
//   console.error(error);
// } finally {
//   sheet.seal();
// }

function handleRoute(req: Request, res: Response, next: NextFunction) {
  const context = {};

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
  // res.end();
}

app.get("/", handleRoute);
app.get("/list", handleRoute);
app.get("/mypage", handleRoute);

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   const context = {};

//   const html = renderToString(
//     sheet.collectStyles(
//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>
//     )
//   );
//   const styles = sheet.getStyleTags();
//   sheet.getStyleElement();
//   const appString = html;
//   res.render("index", {
//     styles,
//     script: {
//       bundle: "client.js",
//     },
//     appString,
//   });
//   // res.end();
//   // try {
//   //   const appString = html(req.path);
//   //   res.render("index", {
//   //     styles,
//   //     script: {
//   //       bundle: "client.js",
//   //     },
//   //     appString,
//   //   });
//   //   res.end();
//   // } catch (error) {
//   //   next(error); // 에러를 에러 처리 미들웨어로 전달
//   // } finally {
//   //   sheet.seal();
//   // }
//   // res.send(`
//   //   <!DOCTYPE html>
//   //   <html>
//   //      <head>
//   //   <meta charset="UTF-8" />
//   //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   //   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//   //   <title>My React App</title>

//   // </head>
//   //     <body>
//   //       <div id="root">${html}</div>

//   //     </body>
//   //   </html>
//   // `);
//   // res.send(`   <script defer src="/bundle.js"></script>`);
// });

// app.get("/list", (req: Request, res: Response, next: NextFunction) => {
//   const context = {};

//   const html = renderToString(
//     sheet.collectStyles(
//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>
//     )
//   );
//   const styles = sheet.getStyleTags();
//   sheet.getStyleElement();
//   const appString = html;
//   res.render("index", {
//     styles,
//     script: {
//       bundle: "client.js",
//     },
//     appString,
//   });
//   // res.end();
//   // try {
//   //   const appString = html(req.path);
//   //   res.render("index", {
//   //     styles,
//   //     script: {
//   //       bundle: "client.js",
//   //     },
//   //     appString,
//   //   });
//   //   res.end();
//   // } catch (error) {
//   //   next(error); // 에러를 에러 처리 미들웨어로 전달
//   // } finally {
//   //   sheet.seal();
//   // }
//   // res.send(`
//   //   <!DOCTYPE html>
//   //   <html>
//   //      <head>
//   //   <meta charset="UTF-8" />
//   //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   //   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//   //   <title>My React App</title>

//   // </head>
//   //     <body>
//   //       <div id="root">${html}</div>

//   //     </body>
//   //   </html>
//   // `);
//   // res.send(`   <script defer src="/bundle.js"></script>`);
// });

// app.get("/mypage", (req: Request, res: Response, next: NextFunction) => {
//   const context = {};

//   const html = renderToString(
//     sheet.collectStyles(
//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>
//     )
//   );
//   const styles = sheet.getStyleTags();
//   sheet.getStyleElement();
//   const appString = html;
//   res.render("index", {
//     styles,
//     script: {
//       bundle: "client.js",
//     },
//     appString,
//   });
//   // res.end();
//   // try {
//   //   const appString = html(req.path);
//   //   res.render("index", {
//   //     styles,
//   //     script: {
//   //       bundle: "client.js",
//   //     },
//   //     appString,
//   //   });
//   //   res.end();
//   // } catch (error) {
//   //   next(error); // 에러를 에러 처리 미들웨어로 전달
//   // } finally {
//   //   sheet.seal();
//   // }
//   // res.send(`
//   //   <!DOCTYPE html>
//   //   <html>
//   //      <head>
//   //   <meta charset="UTF-8" />
//   //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   //   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//   //   <title>My React App</title>

//   // </head>
//   //     <body>
//   //       <div id="root">${html}</div>

//   //     </body>
//   //   </html>
//   // `);
//   // res.send(`   <script defer src="/bundle.js"></script>`);
// });
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

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
