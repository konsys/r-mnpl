import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../theme";
import { IRoomSetup } from "../../FindGames/FindGame";
import PlayersNumber from "./views/PlayersNumber";
import React from "react";
import RoomSwitch from "./views/RoomSwitch";
import { useTranslation } from "react-i18next";

export default function RetroGameParams({ setup }: { setup: IRoomSetup }) {
  const { t } = useTranslation();
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h6">{t("Retro")}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          {t("We start game with rules from 2015!")}
          <br />
          {t("More about this game")}
        </Typography>
      </Grid>
      <Grid item>
        <PlayersNumber setup={setup} battleClosed={true} />
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
