import React from "react";
import "./App.scss";
import { Router, Link } from "@reach/router";
import { Game } from "../Game";

function App() {
  return (
    <>
      <Router>
        <Game path="/game" />
      </Router>
      Treatment
      <Link to="/game">FF</Link>
    </>
  );
}

export default App;
