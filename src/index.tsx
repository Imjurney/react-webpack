import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
const root = document.getElementById("root") as HTMLElement;

// const handleHydrate = () => {
//   return hydrateRoot(
//     root,
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// };

// handleHydrate();

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// if (module.hot) {
//   module.hot.accept("./App", () => {
//     handleHydrate();
//   });
// }

// if (root?.hasChildNodes()) {
//   // SSR로 전달된 HTML이 있는 경우 hydrateRoot를 사용
//   console.log("1");
//   hydrateRoot(
//     root,
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// } else {
//   // SSR이 없는 경우 createRoot를 사용해 클라이언트에서 처음 렌더링
//   console.log("2");
//   createRoot(root).render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }

// hydrateRoot(
//   root,
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
