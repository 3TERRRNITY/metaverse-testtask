import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/styles/index.scss";
import { Navbar } from "./entities/index.ts";
import { Layout } from "./shared/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
