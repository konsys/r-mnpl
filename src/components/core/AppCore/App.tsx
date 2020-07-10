import React from "react";
import "./App.scss";
import { Game } from "../GameCore";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "../Login/Login";

function App() {
  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/game">Game</Link>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
