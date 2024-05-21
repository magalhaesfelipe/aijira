import React from "react";
import Header from "./components/Header";
import MangaGrid from "./components/MangaGrid";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manga from "./pages/MangaPage";
import ReadPage from "./pages/ReadPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MangaGrid />
              </>
            }
          />

          <Route path="/manga" element={<Manga />} />
          <Route path="/read" element={<ReadPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
