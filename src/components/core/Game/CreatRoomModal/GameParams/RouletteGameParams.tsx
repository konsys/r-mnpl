import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../theme";
import PlayersNumber from "./views/PlayersNumber";
import React from "react";
import RoomSwitch from "./views/RoomSwitch";
import { roomSwitchChange } from "../../FindGames/FindGame";
import { useTranslation } from "react-i18next";

export default function RouletteGameParams() {
  const { t } = useTranslation();
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h6">{t("Russian roulette")}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          {t("No cards but you play russian roulette!")}
        </Typography>
      </Grid>
      <Grid item>
        <PlayersNumber battleClosed={true} />
      </Grid>
      <Grid item>
        <Grid container spacing={GRID_SPACING}>
          <Grid item>
            <Typography variant="h6">{t("Room settings")}</Typography>
          </Grid>
        </Grid>
        <RoomSwitch
          text={"Private room"}
          name={"privateRoom"}
          onChange={roomSwitchChange}
        />
        <RoomSwitch
          text={"Game autostart"}
          name={"autostart"}
          onChange={roomSwitchChange}
        />
      </Grid>
    </Grid>
  );
}
