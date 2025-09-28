import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global.css";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";

// find the root element
const rootElement = document.getElementById("root");

// render the app
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
