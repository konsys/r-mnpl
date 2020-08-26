import {
  Button,
  ButtonGroup,
  Grid,
  Switch,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

import { GRID_SPACING } from "../../../../../theme";
import { IRoomSetup } from "../CreateGameModal";
import PlayersNumber from "./views/PlayersNumber";
import RoomSwitch from "./views/RoomSwitch";
import { useTranslation } from "react-i18next";

export default function RegularGameParams({ setup }: { setup: IRoomSetup }) {
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
          <Grid item className="playersNumber">
            <PlayersNumber setup={setup} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={GRID_SPACING}>
          <Grid item>
            <Typography variant="h6">{t("Room settings")}</Typography>
          </Grid>
        </Grid>
        <RoomSwitch
          setup={setup}
          text={"Private room"}
          parameterName={"privateRoom"}
        />
        <RoomSwitch
          setup={setup}
          text={"Game autostart"}
          parameterName={"autostart"}
        />
      </Grid>
    </Grid>
  );
}
