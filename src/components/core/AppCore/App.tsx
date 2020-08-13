import "./App.scss";
import "fontsource-roboto";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Board } from "../BoardCore/Board";
import { Game } from "../Game/Game";
import { Login } from "../Registration/Login/Login";
import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { theme } from "../../../theme";

const App = () => {
  return (
    <>
      {/* <React.StrictMode> */}
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/board" component={Board} />
            <Route exact path="/games" component={Game} />
          </Switch>
        </Router>
      </MuiThemeProvider>
      {/* </React.StrictMode> */}
    </>
  );
};

export default App;
