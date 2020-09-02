import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import {
  RoomPortalFieldType,
  newRoomStore,
  updateRoom,
} from "stores/Game/Room/NewRoomStore";

import { GRID_SPACING } from "../../../../../theme";
import PlayersNumber from "./views/PlayersNumber";
import React from "react";
import RoomSwitch from "./views/RoomSwitch";
import { roomSwitchChange } from "../../FindGames/FindGame";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export default function QuickGameParams() {
  const { t } = useTranslation();
  const room = useStore(newRoomStore);

  return (
    <Grid container direction="column" spacing={GRID_SPACING}>
      <Grid item>
        <Typography variant="h6">{t("Quick game")}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">
          {t(
            "Special rules for quick games. The third dice and quick timers and other interesting things."
          )}
          <br />
          <br />
          {t("For more inforamtion about quick game read here")}
        </Typography>
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
        <RoomSwitch
          text={"Game restarts"}
          name={"restarts"}
          checked={room.restarts}
          onChange={roomSwitchChange}
        />
        <Grid container spacing={GRID_SPACING}>
          <Grid item>
            <Typography variant="h6">{t("Room type")}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={GRID_SPACING} justify="flex-start">
            <Grid item>
              <RadioGroup
                aria-label="portal type"
                name="portal"
                value={room?.portalType}
                onChange={(v: any) =>
                  updateRoom({ ...room, portalType: v.target.value })
                }
              >
                <FormControlLabel
                  value={RoomPortalFieldType.ROULETTE}
                  control={<Radio color="primary" />}
                  label={t(RoomPortalFieldType.ROULETTE)}
                />
                <FormControlLabel
                  value={RoomPortalFieldType.RUSSIAN_ROULETTE}
                  control={<Radio color="primary" />}
                  label={t(RoomPortalFieldType.RUSSIAN_ROULETTE)}
                />
                <FormControlLabel
                  value={RoomPortalFieldType.PORTAL}
                  control={<Radio color="primary" />}
                  label={t(RoomPortalFieldType.PORTAL)}
                />
                <FormControlLabel
                  value={RoomPortalFieldType.NOP}
                  control={<Radio color="primary" />}
                  label={t(RoomPortalFieldType.NOP)}
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
