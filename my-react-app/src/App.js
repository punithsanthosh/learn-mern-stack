import "./App.css";
import React from "react";
import Header from "../src/components/header";
import Task from "./components/task";
import About from "./components/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ul>
          <li>
            <Link to="/">Task</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Task />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
