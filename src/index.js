import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/home.jsx";
import Menu from "./components/menu";
import Services from "./components/services/services";
import Session from "./components/session/session";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App container">
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/services" exact render={() => <Services />} />
            <Route path="/session" exact render={() => <Session />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
