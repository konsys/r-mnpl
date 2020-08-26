import {
  Button,
  ButtonGroup,
  Grid,
  Switch,
  Typography,
} from "@material-ui/core";

import { GRID_SPACING } from "../../../../../theme";
import { IRoomSetup } from "../CreateGameModal";
import React from "react";
import { useTranslation } from "react-i18next";

export default function QuickGameParams({ setup }: { setup: IRoomSetup }) {
  const { t } = useTranslation();

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
          <Grid item className="playersNumber"></Grid>
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
            {/* <Switch
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
            /> */}
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
            {/* <Switch
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
            /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
