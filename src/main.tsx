import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/styles/index.scss";
import { Navbar } from "./entities/index.ts";
import { Layout } from "./shared/index.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
