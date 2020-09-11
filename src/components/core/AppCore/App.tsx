import "fontsource-roboto";
import "./app.scss";
import "../../../theme/styles/vars.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Board } from "../BoardCore/Board";
import { Game } from "../Game/Game";
import GameChatSocket from "socket/GameChatSocket";
import GameModal from "../Game/GameModal/GameModal";
import { Login } from "../Registration/Login/Login";
import { MuiThemeProvider } from "@material-ui/core";
import NotFound from "../../views/Errors/NotFound";
import React from "react";
import RoomsSocket from "socket/RoomsSocket";
import TopFivePage from "../Game/TopFivePage/TopFivePage";
import { theme } from "../../../theme";

const App = () => {
  return (
    <>
      {/* <React.StrictMode> */}
      <MuiThemeProvider theme={theme}>
        <GameModal />
        <GameChatSocket />
        <RoomsSocket />
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/board/:id" component={Board} />
            <Route exact path="/games" component={Game} />
            <Route path="/top-five" component={TopFivePage} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Router>
      </MuiThemeProvider>
      {/* </React.StrictMode> */}
    </>
  );
};

export default App;
