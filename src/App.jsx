import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import MoviePage from "./pages/moviepage";
import SeriesPage from "./pages/seriespage";
import ActionPage from "./pages/action";
import AdventurePage from "./pages/adventure";
import DramaPage from "./pages/drama";
import ComedyPage from "./pages/comedy";
import MorePage from "./pages/more";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moviepage" element={<MoviePage />} />
        <Route path="/seriespage" element={<SeriesPage />} />
        <Route path="/action" element={<ActionPage />} />
        <Route path="/adventure" element={<AdventurePage />} />
        <Route path="/drama" element={<DramaPage />} />
        <Route path="/comedy" element={<ComedyPage />} />
        <Route path="/more" element={<MorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
