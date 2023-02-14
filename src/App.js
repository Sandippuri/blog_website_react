import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogdetails" element={<BlogDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
