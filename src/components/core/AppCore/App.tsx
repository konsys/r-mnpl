import "./App.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Board } from "../BoardCore/Board";
import { Game } from "../Game/Game";
import { Login } from "../Registration/Login/Login";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/games" component={Game} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
