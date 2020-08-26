import {
  Button,
  ButtonGroup,
  Grid,
  Switch,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import { GRID_SPACING } from "../../../../../theme";
import { useTranslation } from "react-i18next";

interface IState {
  playersNumber: number;
  autostart: boolean;
  privateRoom: boolean;
}

export default function RegularGameParams() {
  const { t } = useTranslation();
  const [state, setState] = useState<IState>({
    autostart: false,
    playersNumber: 4,
    privateRoom: false,
  });

  return (
    <Grid container direction="column" spacing={GRID_SPACING}>
      <Grid item>
        <Typography variant="h6">{t("Regular game")}</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          spacing={1}
          justify="space-between"
          alignItems="center"
          direction="row"
        >
          <Grid item>{t("Players")}</Grid>
          <Grid item className="playersNumber">
            <ButtonGroup disableElevation>
              <Button
                size="small"
                disabled={false}
                variant="contained"
                color={state.playersNumber === 2 ? "primary" : "default"}
                onClick={() => setState({ ...state, playersNumber: 2 })}
              >
                2
              </Button>
              <Button
                disabled={false}
                variant="contained"
                color={state.playersNumber === 3 ? "primary" : "default"}
                onClick={() => setState({ ...state, playersNumber: 3 })}
              >
                3
              </Button>
              <Button
                disabled={false}
                variant="contained"
                color={state.playersNumber === 4 ? "primary" : "default"}
                onClick={() => setState({ ...state, playersNumber: 4 })}
              >
                4
              </Button>
              <Button
                disabled={false}
                variant="contained"
                color={state.playersNumber === 5 ? "primary" : "default"}
                onClick={() => setState({ ...state, playersNumber: 5 })}
              >
                5
              </Button>
              <Button
                disabled={false}
                variant="contained"
                color={state.playersNumber === 6 ? "primary" : "default"}
                onClick={() => setState({ ...state, playersNumber: 6 })}
              >
                2x2
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={GRID_SPACING}>
          <Grid item>
            <Typography variant="h6">{t("Room settings")}</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          spacing={GRID_SPACING}
          alignItems="center"
        >
          <Grid item>{t("Private room")}</Grid>
          <Grid item>
            <Switch
              color="primary"
              checked={state.privateRoom}
              onChange={() =>
                setState({
                  ...state,
                  privateRoom: !state.privateRoom,
                })
              }
              name="privateRoom"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          spacing={GRID_SPACING}
          alignItems="center"
        >
          <Grid item>{t("Game autostart")}</Grid>
          <Grid item>
            <Switch
              color="primary"
              checked={state.autostart}
              onChange={() =>
                setState({
                  ...state,
                  autostart: !state.autostart,
                })
              }
              name="autostart"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
