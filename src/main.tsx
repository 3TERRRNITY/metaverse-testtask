import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/styles/index.scss";
import { Navbar } from "./entities/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);
