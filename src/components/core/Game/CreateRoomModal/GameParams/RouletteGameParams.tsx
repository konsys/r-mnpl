import { Grid, Typography } from "@material-ui/core";
import { newRoomStore, toggleRoomSwitch } from "stores/Game/Rooms/RoomsModel";

import { GRID_SPACING } from "../../../../../theme";
import PlayersNumber from "./views/PlayersNumber";
import React from "react";
import RoomSwitch from "./views/RoomSwitch";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function RouletteGameParams({ isVip }: { isVip: boolean }) {
  const { t } = useTranslation();
  const room = useStore(newRoomStore);
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h6">{t("Russian roulette")}</Typography>
        <Typography variant="subtitle2" color="error">
          {!isVip && t("Open VIP status for all available options")}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          {t("No cards but you play russian roulette!")}
        </Typography>
      </Grid>
      <Grid item>
        <PlayersNumber battleClosed={true} isVip={isVip} />
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
          onChange={toggleRoomSwitch}
          disabled={!isVip}
        />
        <RoomSwitch
          text={"Game autostart"}
          name={"autostart"}
          checked={room.autostart}
          onChange={toggleRoomSwitch}
          disabled={!isVip}
        />
      </Grid>
    </Grid>
  );
}
