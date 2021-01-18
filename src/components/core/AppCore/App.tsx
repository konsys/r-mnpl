import "fontsource-roboto";
import "./app.scss";
import "../../../theme/styles/vars.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Board } from "../BoardCore/Board";
import GameChatSocket from "socket/GameChatSocket";
import GameModal from "../Game/GameModal/GameModal";
import Inventory from "../Game/Inventory/Inventory";
import { Login } from "../Login/Login";
import { MuiThemeProvider } from "@material-ui/core";
import { ProfileGate } from "stores/Game/User/UserModel";
import React from "react";
import { Rooms } from "../Game/Rooms/Rooms";
import RoomsSocket from "socket/RoomsSocket";
import TopFivePage from "../Game/TopFivePage/TopFivePage";
import { theme } from "theme";
import { useGate } from "effector-react";
import { Registration } from "components/core/Registration/Registration";
import "animate.css";
import NotFound from "components/views/Errors/NotFound";
import { ToastContainer } from "react-toastify";

const App = () => {
  useGate(ProfileGate);
  return (
    <>
      <ToastContainer />
      <MuiThemeProvider theme={theme}>
        <GameModal />
        <GameChatSocket />
        <RoomsSocket />
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />

            <Route exact path="/board/:id" component={Board} />
            <Route exact path="/" default component={Rooms} />
            <Route path="/top-five" component={TopFivePage} />
            <Route path="/inventory" component={Inventory} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </>
  );
};

export default App;
