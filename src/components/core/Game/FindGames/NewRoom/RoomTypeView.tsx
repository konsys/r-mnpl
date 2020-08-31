import { Grid, Typography } from "@material-ui/core";
import { RoomType, RoomTypeName } from "../../CreatRoomModal/CreateGameModal";

import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import RadioIcon from "@material-ui/icons/Radio";
import React from "react";
import SendIcon from "@material-ui/icons/Send";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { useTranslation } from "react-i18next";

export default function RoomTypeView({ type }: { type: RoomType }) {
  const { t } = useTranslation();
  let name = "";
  let className = "";
  let icon = <VideogameAssetIcon />;

  switch (type) {
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
        <Typography color="textSecondary">23423</Typography>
      </Grid>
    </Grid>
  );
}
