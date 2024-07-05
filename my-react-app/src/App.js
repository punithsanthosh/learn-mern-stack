import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "../src/components/header";
import Card from "../src/components/card";
import Task from "./components/task";
import Input from "./components/input";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ul>
          <li>
            <Link to={"/"}>Task</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
