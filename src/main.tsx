import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/styles/index.scss";
import { Modal, Navbar } from "./entities/index.ts";
import { Layout, config } from "./shared/index.ts";
import { DAppProvider } from "@usedapp/core";
import { BrowserRouter } from "react-router-dom";

document.title = "NEW METAVERSE";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <BrowserRouter>
        <Modal />

        <Navbar />

        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>
);
