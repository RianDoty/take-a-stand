import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "./pages/home";
import About from "./pages/about";
import References from "./pages/references";
import Action from "./pages/action"
import Information from "./pages/information";
import Rights from "./pages/rights";
import WebQuest from "./pages/webquest";


/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/references" component={References} />
    <Route path="/action" component={Action} />
    <Route path="/information" component={Information} />
    <Route path="/rights" component={Rights} />
    <Route path="/webquest" component={WebQuest} />
  </Switch>
);
