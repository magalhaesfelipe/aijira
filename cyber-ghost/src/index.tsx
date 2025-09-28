import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// find the root element
const rootElement = document.getElementById("root");

// render the app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
