import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/home.jsx";
import Menu from "./components/menu";
import Services from "./components/services/services";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
