import "fontsource-roboto";
import "./app.scss";
import "../../../theme/styles/vars.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Board } from "../BoardCore/Board";
import GameChatSocket from "socket/GameChatSocket";
import GameModal from "../Game/GameModal/GameModal";
import Inventory from "../Game/Inventory/Inventory";
import { Login } from "../Registration/Login/Login";
import { MuiThemeProvider } from "@material-ui/core";
import { ProfileGate } from "stores/Game/User/UserModel";
import React from "react";
import { Rooms } from "../Game/Rooms/Rooms";
import RoomsSocket from "socket/RoomsSocket";
import TopFivePage from "../Game/TopFivePage/TopFivePage";
import { theme } from "theme";
import { useGate } from "effector-react";
import ReactNotifications from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { RegistrationForm } from "components/views/Registration/RegistrationForm";
import { RegistrationCode } from "components/views/Registration/RegistrationCode";

const App = () => {
  useGate(ProfileGate);
  return (
    <>
      <ReactNotifications />
      <MuiThemeProvider theme={theme}>
        <GameModal />
        <GameChatSocket />
        <RoomsSocket />
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={RegistrationForm} />
            <Route
              exact
              path="/registration/code"
              component={RegistrationCode}
            />
            <Route exact path="/board/:id" component={Board} />
            <Route exact path="/" default component={Rooms} />
            <Route path="/top-five" component={TopFivePage} />
            <Route path="/inventory" component={Inventory} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </>
  );
};

export default App;
