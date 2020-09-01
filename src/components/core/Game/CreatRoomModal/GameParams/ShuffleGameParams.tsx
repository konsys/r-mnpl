import { Grid, Typography } from "@material-ui/core";

import { GRID_SPACING } from "../../../../../theme";
import PlayersNumber from "./views/PlayersNumber";
import React from "react";
import RoomSwitch from "./views/RoomSwitch";
import { newRoomStore } from "stores/Game/models/NewRoomStore";
import { roomSwitchChange } from "../../FindGames/FindGame";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function ShuffleGameParams() {
  const { t } = useTranslation();
  const room = useStore(newRoomStore);
  return (
    <>
      <Grid container direction="column" spacing={GRID_SPACING}>
        <Grid item>
          <Typography variant="h6">{t("GMS Shuffle")}</Typography>
        </Grid>
        <Grid item>
          <PlayersNumber />
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
            checked={room.privateRoom}
            onChange={roomSwitchChange}
          />
          <RoomSwitch
            text={"Game autostart"}
            name={"autostart"}
            checked={room.autostart}
            onChange={roomSwitchChange}
          />
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography component="span" variant="body2" color="textPrimary">
            {t("you play with random cards adn dices;")}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="body2" color="textPrimary">
            {t("if you win three matches you get this thing;")}
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="span" variant="body2" color="textPrimary">
            {t("if you loose you have to start from the beginning.")}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
