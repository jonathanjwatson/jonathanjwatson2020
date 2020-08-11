import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Router>
  );
}

export default App;
