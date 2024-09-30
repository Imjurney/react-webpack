import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter, Switch } from "react-router-dom";
const root = document.getElementById("root") as HTMLElement;

hydrateRoot(
  root,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
