import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Error from "./Components/Navigation/Error";
import Landmark from "./Components/Landmark/Landmark";
import Survillance from "./Components/Survillance/Survillance";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Landmark />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/object" component={Object} />
          <Route exact path="/security" component={Survillance} />
          <Route component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
