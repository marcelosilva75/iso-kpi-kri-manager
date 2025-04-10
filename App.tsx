// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestePage from "./pages/TestePage";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teste" element={<TestePage />} />
        </Routes>
      </div>
    </Router>
  );
}
