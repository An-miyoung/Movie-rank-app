import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import About from "./routers/About";
import Home from "./routers/Home";
import Navigation from "./components/Navigation";
import Detail from "./routers/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home} />
      <Route exact path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
