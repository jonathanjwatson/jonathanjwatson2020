import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import NoMatch from "./containers/NoMatch/NoMatch";
import SpeakingAndTraining from "./containers/SpeakingAndTraining/SpeakingAndTraining";
import Uses from "./containers/Uses/Uses";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/speaking-and-training"
          component={SpeakingAndTraining}
        />
        <Route exact path="/uses" component={Uses} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
