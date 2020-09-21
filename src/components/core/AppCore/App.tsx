import "fontsource-roboto";
import "./app.scss";
import "../../../theme/styles/vars.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { getUserFx, profileGate } from "stores/Game/UserStore";
import { useGate, useStore } from "effector-react";

import { Board } from "../BoardCore/Board";
import { Game } from "../Game/Game";
import GameChatSocket from "socket/GameChatSocket";
import GameModal from "../Game/GameModal/GameModal";
import { Login } from "../Registration/Login/Login";
import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import RoomsSocket from "socket/RoomsSocket";
import TopFivePage from "../Game/TopFivePage/TopFivePage";
import { theme } from "../../../theme";

const App = () => {
  useGate(profileGate);

  const pending = useStore(getUserFx.pending);
  return (
    <>
      {/* <React.StrictMode> */}
      {pending ? (
        "wait"
      ) : (
        <MuiThemeProvider theme={theme}>
          <GameModal />
          <GameChatSocket />
          <RoomsSocket />
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/board/:id" component={Board} />
              <Route exact path="/" default component={Game} />
              <Route path="/top-five" component={TopFivePage} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      )}
      {/* </React.StrictMode> */}
    </>
  );
};

export default App;
