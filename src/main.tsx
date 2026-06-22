import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);