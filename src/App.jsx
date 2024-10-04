// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import "./index.css";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
