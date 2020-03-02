import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Game } from "../Game";

function App() {
  return (
    <>
      <Router>
        <Game path="/game" />
      </Router>
    </>
  );
}

export default App;
