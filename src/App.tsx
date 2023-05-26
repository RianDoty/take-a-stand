import { useState } from "react";
import { Router, Link } from "wouter";
import PageRouter from "./router";
import logo from './assets/logo.png'
import "./App.css";

function Navigation() {
  return (
    <ul className="navigation">
      <li style={{padding: 0}}><img src={logo} style={{height: '120px'}}/></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/references">References</Link></li>
      <li><Link to="/action">Action</Link></li>
      <li><Link to="/information">Information</Link></li>
      <li><Link to="/rights">Connection to Rights</Link></li>
      <li><Link to="/webquest">Web Quest</Link></li>
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

