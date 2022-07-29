import React from "react";  
import { Routes, Route } from "react-router-dom"

import './App.css';
import Friend from "./components/Friend"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Friend />
      </header>
    </div>
  );
}

export default App;
