import { useState } from "react";
import { Router, Link } from "wouter";
import PageRouter from "./router";
import "./App.css";

function Navigation() {
  return (
    <ul className="navigation">
      <li>Home</li>
      <li>About</li>
      <li>References</li>
      <li>TED Talk</li>
    </ul>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <PageRouter />
      </main>
    </Router>
  );
}

export default App;
