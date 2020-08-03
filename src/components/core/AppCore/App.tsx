import "./App.scss";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { GameBoard } from "../BoardCore/Board";
import { Login } from "../Registration/Login/Login";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/game" component={GameBoard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
