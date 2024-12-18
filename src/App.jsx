// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./index.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Community from "./pages/community";
import Dashboard from "./pages/dashboard";
import Header from "./pages/Header";
import Feed from "./pages/Feed";

function App() {
  return (
    <Router>
      <div className="">
        
        <main className="container mx-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/community" element={<Community />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
