import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
const root = document.getElementById("root") as HTMLElement;

const handleHydrate = () => {
  return hydrateRoot(
    root,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

handleHydrate();

// createRoot(root).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// if (module.hot) {
//   module.hot.accept("./App", () => {
//     handleHydrate();
//   });
// }
