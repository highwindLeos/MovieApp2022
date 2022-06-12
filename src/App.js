import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navigation from "./routes/Navigation";

// function Type Component
function App () {
  return (
    <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App;