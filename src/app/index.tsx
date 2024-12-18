import React from "react";
import ReactDOM from "react-dom/client";

import "@/shared/styles/global.css";

import { App } from "./ui/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
