import React from "react";
import "./App.scss";
import { Router } from "@reach/router";
import { Game } from "../GameCore";
import { LoginForm } from "../../views/LoginForm/LoginForm";

function App() {
  return (
    <>
      <Router>
        <Game path="/game" />
      </Router>
      <LoginForm />
    </>
  );
}

export default App;
