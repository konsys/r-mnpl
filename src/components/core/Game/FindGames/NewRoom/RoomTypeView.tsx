import { Grid, Typography } from "@material-ui/core";
import {
  IRoomState,
  RoomPortalFieldType,
  RoomType,
  RoomTypeName,
} from "stores/Game/Room/NewRoomStore";

import Autorenew from "@material-ui/icons/Autorenew";
import CasinoIcon from "@material-ui/icons/Casino";
import EvStationIcon from "@material-ui/icons/EvStation";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import RadioIcon from "@material-ui/icons/Radio";
import React from "react";
import RestoreIcon from "@material-ui/icons/Restore";
import SendIcon from "@material-ui/icons/Send";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useTranslation } from "react-i18next";

export default function RoomTypeView({ room }: { room: IRoomState }) {
  const { t } = useTranslation();
  let name = "";
  let className = "";
  let icon = <VideogameAssetIcon />;

  switch (room.roomType) {
    case RoomType.REGULAR:
      name = RoomTypeName.REGULAR;
      className = RoomType.REGULAR;

      break;
    case RoomType.QUICK:
      name = RoomTypeName.QUICK;
      className = RoomType.QUICK;
      icon = <SendIcon />;
      break;
    case RoomType.RETRO:
      name = RoomTypeName.RETRO;
      className = RoomType.RETRO;
      icon = <RadioIcon />;
      break;
    case RoomType.ROULETTE:
      name = RoomTypeName.ROULETTE;
      className = RoomType.ROULETTE;
      icon = <LocationSearchingIcon />;
      break;
    case RoomType.SHUFFLE:
      name = RoomTypeName.SHUFFLE;
      className = RoomType.SHUFFLE;
      icon = <ShuffleIcon />;
      break;
  }

  return (
    <Grid
      container
      justify="flex-start"
      alignContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item className={className}>
        {icon}
      </Grid>
      <Grid item className={className}>
        {t(name)}
      </Grid>
      <Grid item>
        {room.restarts && (
          <Typography color="textSecondary" variant="subtitle2">
            <Grid container alignItems="center">
              <RestoreIcon />
              {t("With restarts")}
            </Grid>
          </Typography>
        )}
      </Grid>
      <Grid item>
        {room.autostart && (
          <Typography color="textSecondary" variant="subtitle2">
            <Grid container alignItems="center">
              <Autorenew />
              {t("Game autostart")}
            </Grid>
          </Typography>
        )}
      </Grid>
      <Grid item>
        {room.privateRoom && (
          <Typography color="textSecondary" variant="subtitle2">
            <Grid container alignContent="center">
              <VisibilityOffIcon />
              {t("Private room")}
            </Grid>
          </Typography>
        )}
      </Grid>
      <Grid item>
        {room.portalType === RoomPortalFieldType.PORTAL && (
          <Typography color="textSecondary" variant="subtitle2">
            {t("With portal")}
          </Typography>
        )}
        {room.portalType === RoomPortalFieldType.ROULETTE && (
          <Typography color="textSecondary" variant="subtitle2">
            <Grid container alignItems="center">
              <CasinoIcon />
              {t("Roulette")}
            </Grid>
          </Typography>
        )}
        {room.portalType === RoomPortalFieldType.RUSSIAN_ROULETTE && (
          <Typography color="textSecondary" variant="subtitle2">
            <Grid container alignItems="center">
              <EvStationIcon />
              {t("Russian roulette")}
            </Grid>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
