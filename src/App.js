import React from "react";
import { BrowserRouter as Router, Route, Routes } from 
"react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
