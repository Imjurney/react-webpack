/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.tsx":
/*!**************************!*\
  !*** ./server/index.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst https = __webpack_require__(/*! https */ \"https\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst app = express();\nconst {\n  ServerStyleSheet\n} = __webpack_require__(/*! styled-components */ \"styled-components\");\nconst {\n  renderToString\n} = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n// import { renderToPipeableStream, renderToReadableStream, renderToString } from \"react-dom/server\";\n// import ReactDomServer from \"react-dom/server\";\nconst sslCrtFile = (__webpack_require__(/*! dotenv */ \"dotenv\").config)().parsed.SSL_CRT_FILE;\nconst sslKeyFile = (__webpack_require__(/*! dotenv */ \"dotenv\").config)().parsed.SSL_KEY_FILE;\nconst App = (__webpack_require__(/*! ../src/App */ \"./src/App.tsx\")[\"default\"]);\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\nconst webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\nconst webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\nconst config = __webpack_require__(/*! ../webpack.config */ \"./webpack.config.js\");\nconst sslCrt = fs.readFileSync(sslCrtFile, \"utf-8\");\nconst sslKey = fs.readFileSync(sslKeyFile, \"utf-8\");\napp.set(\"view engine\", \"pug\");\napp.set(\"views\", path.join(__dirname, \"views\"));\nconst compiler = webpack(config);\nconst location = {\n  home: \"/\",\n  list: \"/list\",\n  mypage: \"/mypage\"\n};\nconst context = {};\nconst sheet = new ServerStyleSheet();\n// const html = (url?: string) => {\n//   return renderToString(\n//     sheet.collectStyles(\n//       <StaticRouter location={url} context={context}>\n//         <App />\n//       </StaticRouter>\n//     )\n//   );\n// };\n// app.get(\"/\", (req: Request, res: Response, next: NextFunction) => {\n//   try {\n//     const appString = html(location.home);\n//     res.render(\"index\", {\n//       styles,\n//       script: {\n//         bundle: \"client.js\",\n//       },\n//       appString,\n//     });\n//     res.end();\n//   } catch (error) {\n//     next(error); // 에러를 에러 처리 미들웨어로 전달\n//   } finally {\n//     sheet.seal();\n//   }\n// });\n// app.get(\"/list\", (req: Request, res: Response, next: NextFunction) => {\n//   try {\n//     const appString = html(location.list);\n//     res.render(\"index\", {\n//       styles,\n//       script: {\n//         bundle: \"client.js\",\n//       },\n//       appString,\n//     });\n//     res.end();\n//   } catch (error) {\n//     next(error); // 에러를 에러 처리 미들웨어로 전달\n//   } finally {\n//     sheet.seal();\n//   }\n// });\n// try {\n//   app.get(\"/\", (req: Request, res: Response) => {\n//     const appString = html;\n//     res.render(\"index\", {\n//       styles,\n//       script: {\n//         bundle: \"client.js\",\n//       },\n//       appString,\n//     });\n//     res.end();\n//   });\n// } catch (error) {\n//   console.error(error);\n// } finally {\n//   sheet.seal();\n// }\nfunction handleRoute(req, res, next) {\n  const context = {};\n  const html = renderToString(sheet.collectStyles((0, jsx_runtime_1.jsx)(react_router_dom_1.StaticRouter, {\n    location: req.url,\n    context: context,\n    children: (0, jsx_runtime_1.jsx)(App, {})\n  })));\n  const styles = sheet.getStyleTags();\n  sheet.getStyleElement();\n  const appString = html;\n  res.render(\"index\", {\n    styles,\n    script: {\n      bundle: \"client.js\"\n    },\n    appString\n  });\n}\napp.get(\"/\", handleRoute);\napp.get(\"/list\", handleRoute);\napp.get(\"/mypage\", handleRoute);\n// app.get(\"/\", (req: Request, res: Response, next: NextFunction) => {\n//   const context = {};\n//   const html = renderToString(\n//     sheet.collectStyles(\n//       <StaticRouter location={req.url} context={context}>\n//         <App />\n//       </StaticRouter>\n//     )\n//   );\n//   const styles = sheet.getStyleTags();\n//   sheet.getStyleElement();\n//   const appString = html;\n//   res.render(\"index\", {\n//     styles,\n//     script: {\n//       bundle: \"client.js\",\n//     },\n//     appString,\n//   });\n//   // res.end();\n//   // try {\n//   //   const appString = html(req.path);\n//   //   res.render(\"index\", {\n//   //     styles,\n//   //     script: {\n//   //       bundle: \"client.js\",\n//   //     },\n//   //     appString,\n//   //   });\n//   //   res.end();\n//   // } catch (error) {\n//   //   next(error); // 에러를 에러 처리 미들웨어로 전달\n//   // } finally {\n//   //   sheet.seal();\n//   // }\n//   // res.send(`\n//   //   <!DOCTYPE html>\n//   //   <html>\n//   //      <head>\n//   //   <meta charset=\"UTF-8\" />\n//   //   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n//   //   <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n//   //   <title>My React App</title>\n//   // </head>\n//   //     <body>\n//   //       <div id=\"root\">${html}</div>\n//   //     </body>\n//   //   </html>\n//   // `);\n//   // res.send(`   <script defer src=\"/bundle.js\"></script>`);\n// });\n// app.get(\"/list\", (req: Request, res: Response, next: NextFunction) => {\n//   const context = {};\n//   const html = renderToString(\n//     sheet.collectStyles(\n//       <StaticRouter location={req.url} context={context}>\n//         <App />\n//       </StaticRouter>\n//     )\n//   );\n//   const styles = sheet.getStyleTags();\n//   sheet.getStyleElement();\n//   const appString = html;\n//   res.render(\"index\", {\n//     styles,\n//     script: {\n//       bundle: \"client.js\",\n//     },\n//     appString,\n//   });\n//   // res.end();\n//   // try {\n//   //   const appString = html(req.path);\n//   //   res.render(\"index\", {\n//   //     styles,\n//   //     script: {\n//   //       bundle: \"client.js\",\n//   //     },\n//   //     appString,\n//   //   });\n//   //   res.end();\n//   // } catch (error) {\n//   //   next(error); // 에러를 에러 처리 미들웨어로 전달\n//   // } finally {\n//   //   sheet.seal();\n//   // }\n//   // res.send(`\n//   //   <!DOCTYPE html>\n//   //   <html>\n//   //      <head>\n//   //   <meta charset=\"UTF-8\" />\n//   //   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n//   //   <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n//   //   <title>My React App</title>\n//   // </head>\n//   //     <body>\n//   //       <div id=\"root\">${html}</div>\n//   //     </body>\n//   //   </html>\n//   // `);\n//   // res.send(`   <script defer src=\"/bundle.js\"></script>`);\n// });\n// app.get(\"/mypage\", (req: Request, res: Response, next: NextFunction) => {\n//   const context = {};\n//   const html = renderToString(\n//     sheet.collectStyles(\n//       <StaticRouter location={req.url} context={context}>\n//         <App />\n//       </StaticRouter>\n//     )\n//   );\n//   const styles = sheet.getStyleTags();\n//   sheet.getStyleElement();\n//   const appString = html;\n//   res.render(\"index\", {\n//     styles,\n//     script: {\n//       bundle: \"client.js\",\n//     },\n//     appString,\n//   });\n//   // res.end();\n//   // try {\n//   //   const appString = html(req.path);\n//   //   res.render(\"index\", {\n//   //     styles,\n//   //     script: {\n//   //       bundle: \"client.js\",\n//   //     },\n//   //     appString,\n//   //   });\n//   //   res.end();\n//   // } catch (error) {\n//   //   next(error); // 에러를 에러 처리 미들웨어로 전달\n//   // } finally {\n//   //   sheet.seal();\n//   // }\n//   // res.send(`\n//   //   <!DOCTYPE html>\n//   //   <html>\n//   //      <head>\n//   //   <meta charset=\"UTF-8\" />\n//   //   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n//   //   <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n//   //   <title>My React App</title>\n//   // </head>\n//   //     <body>\n//   //       <div id=\"root\">${html}</div>\n//   //     </body>\n//   //   </html>\n//   // `);\n//   // res.send(`   <script defer src=\"/bundle.js\"></script>`);\n// });\napp.use((err, req, res, next) => {\n  console.error(err);\n  res.status(500).send(\"Something broke!\");\n});\napp.use(webpackDevMiddleware(compiler, {\n  publicPath: config[1].output.publicPath\n}));\napp.use(webpackHotMiddleware(compiler));\n// async function handler(req: Request, res: Response) {\n//   const { pipe, abort } = renderToPipeableStream(<App />, {\n//     // bootstrapScripts: [\"/client.js\"],\n//     progressiveChunkSize: 1024,\n//     onShellReady() {\n//       app.get(\"/template\", (req: Request, rest: Response) => {\n//         res.render(\"temp\");\n//       });\n//       // res.setHeader(\"content-type\", \"text/html\");\n//       pipe(res);\n//     },\n//   });\n//   // const finalHtml = html.replace('<div id=\"root\"></div>', `<div id=\"root\">${stream}</div>`);\n//   //   const finalHtml = `\n//   //  <html lang=\"ko\">\n//   //    <head>\n//   //      <meta charset=\"UTF-8\" />\n//   //      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n//   //      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\" />\n//   //      <title>My React App</title>\n//   //     </head>\n//   //    <body>\n//   //       <div id=\"root\">${stream}</div>\n//   //    </body>\n//   //  </html>\n//   //    `;\n//   //   return new Response(finalHtml, {\n//   //     headers: { \"Content-Type\": \"text/html\" },\n//   //   });\n// }\n// app.get(\"*\", (req: Request, res: Response) => {\n//   handler(req, res);\n// });\n// app.use(\n//   webpackDevMiddleware(compiler, {\n//     publicPath: config[1].output.publicPath, // client configuration\n//   })\n// );\n// app.use(\"/\", express.static(\"dist/client\"));\nhttps.createServer({\n  key: sslKey,\n  cert: sslCrt\n}, app).listen(3000, () => {\n  console.log(\"HTTPS server running on https://localhost:3000\");\n});\n\n//# sourceURL=webpack://test-react-ssr/./server/index.tsx?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst Home_1 = __importDefault(__webpack_require__(/*! ./container/Home */ \"./src/container/Home.tsx\"));\nconst List_1 = __importDefault(__webpack_require__(/*! ./container/List */ \"./src/container/List.tsx\"));\nconst Mypage_1 = __importDefault(__webpack_require__(/*! ./container/Mypage */ \"./src/container/Mypage.tsx\"));\nconst Navbar = styled_components_1.default.nav`\n  display: flex;\n  justify-content: space-between;\n  background-color: #333;\n  padding: 15px;\n`;\nconst Logo = styled_components_1.default.div`\n  color: #fff;\n  font-size: 1.5em;\n`;\nconst NavLinks = styled_components_1.default.div`\n  & > a {\n    color: #fff;\n    margin-left: 15px;\n    text-decoration: none;\n\n    &:hover {\n      color: #ddd;\n    }\n  }\n`;\nconst NavigationBar = () => (0, jsx_runtime_1.jsxs)(Navbar, {\n  children: [(0, jsx_runtime_1.jsx)(Logo, {\n    children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, {\n      to: \"/\",\n      style: {\n        color: \"inherit\",\n        textDecoration: \"inherit\"\n      },\n      children: \"MyApp\"\n    })\n  }), (0, jsx_runtime_1.jsxs)(NavLinks, {\n    children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, {\n      to: \"/list\",\n      children: \"List Page\"\n    }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, {\n      to: \"/mypage\",\n      children: \"My Page\"\n    })]\n  })]\n});\nconst App = () => {\n  // const [count, setCount] = useState(0);\n  return (0, jsx_runtime_1.jsxs)(\"div\", {\n    children: [(0, jsx_runtime_1.jsx)(NavigationBar, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Switch, {\n      children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {\n        exact: true,\n        path: \"/\",\n        component: Home_1.default\n      }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {\n        exact: true,\n        path: \"/list\",\n        component: List_1.default\n      }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, {\n        exact: true,\n        path: \"/mypage\",\n        component: Mypage_1.default\n      })]\n    })]\n  });\n};\nexports[\"default\"] = App;\n\n//# sourceURL=webpack://test-react-ssr/./src/App.tsx?");

/***/ }),

/***/ "./src/container/Home.tsx":
/*!********************************!*\
  !*** ./src/container/Home.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  var desc = Object.getOwnPropertyDescriptor(m, k);\n  if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n    desc = {\n      enumerable: true,\n      get: function () {\n        return m[k];\n      }\n    };\n  }\n  Object.defineProperty(o, k2, desc);\n} : function (o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n});\nvar __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {\n  Object.defineProperty(o, \"default\", {\n    enumerable: true,\n    value: v\n  });\n} : function (o, v) {\n  o[\"default\"] = v;\n});\nvar __importStar = this && this.__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n  __setModuleDefault(result, mod);\n  return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ \"styled-components\"));\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst HomePage = () => {\n  const [count, setCount] = (0, react_1.useState)(0);\n  return (0, jsx_runtime_1.jsxs)(GradientBackground, {\n    children: [(0, jsx_runtime_1.jsx)(WelcomeMessage, {\n      children: \"\\uD658\\uC601\\uD569\\uB2C8\\uB2E4!\"\n    }), (0, jsx_runtime_1.jsxs)(CountMessage, {\n      children: [\"Count: \", count, \" \"]\n    }), (0, jsx_runtime_1.jsx)(Button, {\n      onClick: () => setCount(count => count + 1),\n      children: \"Increase count\"\n    })]\n  });\n};\nconst fadeIn = (0, styled_components_1.keyframes)`\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n`;\nconst CountMessage = styled_components_1.default.h2`\n  text-align: center;\n  font-size: 2em;\n  color: #fff;\n`;\nconst WelcomeMessage = styled_components_1.default.h1`\n  text-align: center;\n  margin-top: 50px;\n  font-size: 2.5em;\n  color: #fff;\n  animation: ${fadeIn} 2s ease-in-out;\n`;\nconst GradientBackground = styled_components_1.default.div`\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  background-size: 400% 400%;\n  animation: gradient 15s ease infinite;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @keyframes gradient {\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n`;\nconst Button = styled_components_1.default.button`\n  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n  border: none;\n  color: white;\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n\n  transition-duration: 0.4s;\n  cursor: pointer;\n  border-radius: 12px;\n  outline: none;\n\n  &:hover {\n    background: #23d5ab;\n    color: black;\n  }\n\n  &:active {\n    transform: scale(0.95);\n  }\n`;\nexports[\"default\"] = HomePage;\n\n//# sourceURL=webpack://test-react-ssr/./src/container/Home.tsx?");

/***/ }),

/***/ "./src/container/List.tsx":
/*!********************************!*\
  !*** ./src/container/List.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst react_1 = __webpack_require__(/*! react */ \"react\");\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nconst styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\nconst ListContainer = styled_components_1.default.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n`;\nconst ListItem = styled_components_1.default.div`\n  width: 80%;\n  border: 1px solid #ddd;\n  padding: 10px;\n  margin: 10px 0;\n  border-radius: 5px;\n`;\nconst ListPage = () => {\n  const [data, setData] = (0, react_1.useState)([]);\n  (0, react_1.useEffect)(() => {\n    const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {\n      const result = yield (0, axios_1.default)(\"https://jsonplaceholder.typicode.com/posts\");\n      setData(result.data.slice(0, 400));\n    });\n    console.log(\"fetch data\", data);\n    fetchData();\n  }, []);\n  return (0, jsx_runtime_1.jsx)(ListContainer, {\n    children: data.map(item => (0, jsx_runtime_1.jsxs)(ListItem, {\n      children: [(0, jsx_runtime_1.jsx)(\"div\", {\n        children: item.title\n      }), (0, jsx_runtime_1.jsx)(\"p\", {\n        children: item.body\n      })]\n    }, item.id))\n  });\n};\nexports[\"default\"] = ListPage;\n\n//# sourceURL=webpack://test-react-ssr/./src/container/List.tsx?");

/***/ }),

/***/ "./src/container/Mypage.tsx":
/*!**********************************!*\
  !*** ./src/container/Mypage.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\nconst ProfileCard = styled_components_1.default.div`\n  width: 300px;\n  padding: 20px;\n  margin: 10px auto;\n  border: 1px solid #ddd;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n`;\nconst Name = styled_components_1.default.h2`\n  margin: 0;\n  font-size: 20px;\n  color: #333;\n`;\nconst Email = styled_components_1.default.p`\n  margin: 0;\n  font-size: 16px;\n  color: #777;\n`;\nconst user = {\n  name: \"홍길동\",\n  email: \"hong@example.com\"\n};\nconst alertComment = () => {\n  alert(\"Hello World!\");\n};\nconst MyPage = () => (0, jsx_runtime_1.jsxs)(ProfileCard, {\n  onClick: alertComment,\n  children: [(0, jsx_runtime_1.jsx)(Name, {\n    children: user.name\n  }), (0, jsx_runtime_1.jsx)(Email, {\n    children: user.email\n  })]\n});\nexports[\"default\"] = MyPage;\n\n//# sourceURL=webpack://test-react-ssr/./src/container/Mypage.tsx?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\nconst client_1 = __webpack_require__(/*! react-dom/client */ \"react-dom/client\");\nconst App_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './App'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst root = document.getElementById(\"root\");\n(0, client_1.hydrateRoot)(root, (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, {\n  children: (0, jsx_runtime_1.jsx)(App_1.default, {})\n}));\n\n//# sourceURL=webpack://test-react-ssr/./webpack.config.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/client":
/*!***********************************!*\
  !*** external "react-dom/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/client");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.tsx");
/******/ 	
/******/ })()
;