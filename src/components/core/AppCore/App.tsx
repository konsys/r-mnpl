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
import Profile from "../Profile/Profile";
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
            <Profile>
              <Route exact path="/login" component={Login} />
              <Route exact path="/board/:id" component={Board} />
              <Route exact path="/" default component={Game} />
              <Route path="/top-five" component={TopFivePage} />
            </Profile>
          </Switch>
        </Router>
      </MuiThemeProvider>

      {/* </React.StrictMode> */}
    </>
  );
};

export default App;
