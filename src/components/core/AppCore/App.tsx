import React from "react";
import "./App.scss";
import { GameBoard } from "../GameBoard";
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
          <Route exact path="/game" component={GameBoard} />
          <Route exact path="/logout" component={GameBoard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
