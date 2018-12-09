import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/home.jsx";
import Menu from "./components/menu";
import Services from "./components/services/services";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App container">
      <Menu />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/services" exact render={() => <Services />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
