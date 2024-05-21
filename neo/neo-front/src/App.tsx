import React from "react";
import Header from "./components/Header";
import MangaGrid from "./components/MangaGrid";
import Navbar from "./components/Navbar";
import Update from "./pages/Update";
import Explore from "./pages/Explore";
import Popular from "./pages/Popular";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manga from "./pages/Manga";

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

          <Route path="/updates" element={<Update />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings" element={<Popular />} />
          <Route path="/manga" element={<Manga />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
